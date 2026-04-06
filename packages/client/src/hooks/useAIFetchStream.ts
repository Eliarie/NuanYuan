import { useState, useCallback, useRef } from 'react';
import Taro from '@tarojs/taro';

interface UseAIFetchStreamOptions {
  url: string;
  method?: keyof Taro.request.Method;
  headers?: Record<string, string>;
  onMessage?: (chunk: string) => void;
  onFinish?: (fullText: string) => void;
  onError?: (error: Error) => void;
}

/**
 * AI Stream 适配 Hook
 * 使用 Taro.request 的 enableChunked 开启分块接收，
 * 监听 onChunkReceived 实现类似 Web Streams API 的流式打字机效果。
 */
export const useAIFetchStream = (options: UseAIFetchStreamOptions) => {
  const [data, setData] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  
  const requestTaskRef = useRef<any>(null);

  const fetchStream = useCallback(async (body?: any) => {
    setIsLoading(true);
    setError(null);
    setData('');

    const token = Taro.getStorageSync('token');
    const header = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      header['Authorization'] = `Bearer ${token}`;
    }

    let fullText = '';

    try {
      const requestTask = Taro.request({
        url: options.url,
        method: options.method || 'POST',
        data: body,
        header,
        enableChunked: true,
        success: (res) => {
          if (res.statusCode >= 400) {
            const err = new Error(`HTTP Error: ${res.statusCode}`);
            setError(err);
            options.onError?.(err);
          } else {
            options.onFinish?.(fullText);
          }
        },
        fail: (err) => {
          const error = new Error(err.errMsg || 'Request failed');
          setError(error);
          options.onError?.(error);
        },
        complete: () => {
          setIsLoading(false);
          requestTaskRef.current = null;
        }
      });
      
      requestTaskRef.current = requestTask;

      requestTask.onChunkReceived((res) => {
        try {
          const arrayBuffer = res.data;
          let chunkText = '';
          
          if (typeof TextDecoder !== 'undefined') {
             const decoder = new TextDecoder('utf-8');
             chunkText = decoder.decode(arrayBuffer);
          } else {
             // Fallback for miniprogram environments without TextDecoder
             const uint8Array = new Uint8Array(arrayBuffer);
             let str = '';
             for (let i = 0; i < uint8Array.length; i++) {
                str += String.fromCharCode(uint8Array[i]);
             }
             chunkText = decodeURIComponent(escape(str));
          }

          // TODO: If using Vercel AI SDK specific protocol (e.g., Data Stream Protocol data: "..." \n\n),
          // you may need additional parsing logic here.
          // Currently assuming plain text chunks from backend for MVP.

          fullText += chunkText;
          setData((prev) => prev + chunkText);
          options.onMessage?.(chunkText);
          
        } catch (e) {
          console.error('Failed to parse chunk:', e);
        }
      });
    } catch (e) {
      const err = e instanceof Error ? e : new Error(String(e));
      setError(err);
      options.onError?.(err);
      setIsLoading(false);
    }
  }, [options]);

  const abort = useCallback(() => {
    if (requestTaskRef.current) {
      requestTaskRef.current.abort();
      requestTaskRef.current = null;
      setIsLoading(false);
    }
  }, []);

  return {
    fetchStream,
    data,
    isLoading,
    error,
    abort
  };
};
