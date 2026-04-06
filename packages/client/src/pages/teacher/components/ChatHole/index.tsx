import { View, Text, ScrollView } from '@tarojs/components'
import { useState } from 'react'
import ChatBubble from '../../../../components/ChatBubble'

// Mock Data
const MOCK_MESSAGES = [
  { id: '1', type: 'ai' as const, content: '林老师辛苦啦！今天班里有什么想吐槽的事情吗？' },
  { id: '2', type: 'teacher' as const, content: '今天轩轩又把颜料弄到衣服上了，还和小明抢玩具，真是愁死我了。' },
  { id: '3', type: 'ai' as const, content: '收到！已经帮您转换并提取了结构化记录：\n【专注力&创造力】：参与美术活动积极，探索欲强；\n【社交互动】：仍在学习社交边界。\n\n需要我现在整理一份家长反馈推优吗？' },
]

export const ChatHole = () => {
  const [messages] = useState(MOCK_MESSAGES)
  const [inputMode, setInputMode] = useState<'text' | 'voice'>('voice')

  return (
    <View className="flex flex-col h-full bg-[#fbfaf8]">
      <ScrollView scrollY className="flex-1 py-4 flex-col gap-4">
        {messages.map((msg) => (
          <ChatBubble 
            key={msg.id} 
            type={msg.type} 
            content={msg.content} 
          />
        ))}
      </ScrollView>
      
      {/* Input Area Mock */}
      <View className="w-full bg-white pb-safe pt-2 px-4 shadow-[0_-4px_16px_rgba(77,58,29,0.04)] rounded-t-3xl border-t border-[#ebe7de]/30">
        <View className="flex flex-row items-center gap-2 mb-2">
            
          {inputMode === 'voice' ? (
             <View className="flex-1 h-11 bg-[#f5f3ec] rounded-full flex items-center justify-center border-none">
                 <Text className="text-[#8d8a85] font-medium text-[15px]">按住 说话</Text>
             </View>
          ) : (
             <View className="flex-1 bg-[#f5f3ec] rounded-2xl px-4 py-3 border-none flex items-center">
                 <Text className="text-[#8d8a85] text-[15px]">我也说点什么...</Text>
             </View>
          )}

          <View 
            className="w-11 h-11 rounded-full bg-white border border-[#ebe7de] flex items-center justify-center shadow-sm ml-2"
            onClick={() => setInputMode(prev => prev === 'voice' ? 'text' : 'voice')}
          >
            <Text className="text-[20px]">{inputMode === 'voice' ? '⌨️' : '🎤'}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ChatHole
