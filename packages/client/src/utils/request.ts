import Taro from '@tarojs/taro';

export interface RequestOptions extends Omit<Taro.request.Option, 'url'> {
  url: string;
}

const mockData = {
  '/api/teacher/children': [
    { id: '1', name: '小明', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix', classId: 'cls1' },
    { id: '2', name: '小红', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mia', classId: 'cls1' },
    { id: '3', name: '小刚', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver', classId: 'cls1' },
  ],
  '/api/teacher/records': [
    { id: 'rec1', childId: '1', content: '小明今天很棒', isShared: true, createdAt: new Date().toISOString() },
    { id: 'rec2', childId: '2', content: '小红画画很好看', isShared: true, createdAt: new Date().toISOString() },
  ],
  '/api/parent/feed': [
    { id: 'feed1', childId: '1', childName: '小明', content: '小明今天在户外活动中表现活跃，和小朋友们一起玩了滑梯。', createdAt: new Date().toISOString(), teacherName: '李老师', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix' },
    { id: 'feed2', childId: '1', childName: '小明', content: '今天午餐小明吃得很棒，把饭菜都吃光了。', createdAt: new Date(Date.now() - 86400000).toISOString(), teacherName: '李老师', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix' }
  ],
  '/api/parent/child': {
    id: '1', name: '小明', class: '大二班', teacher: '李老师', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
  }
};

/**
 * 封装全局请求方法，桥接小程序网络层
 * 支持 React Query (TanStack Query) 作为全局 fetch 替代品或 queryFn 基础
 */
export const request = async <T = any>(options: RequestOptions): Promise<T> => {
  // MOCK DATA INTERCEPTOR
  console.log(`[MOCK REQUEST] ${options.method || 'GET'} ${options.url}`);
  
  // mock delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  for (const [path, data] of Object.entries(mockData)) {
    if (options.url.includes(path)) {
      console.log(`[MOCK RESPONSE] 200 OK`, data);
      return data as unknown as T;
    }
  }
  const token = Taro.getStorageSync('token');
  const header = {
    'Content-Type': 'application/json',
    ...options.header,
  };

  if (token) {
    header['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await Taro.request<T>({
      ...options,
      header,
    });

    if (response.statusCode >= 200 && response.statusCode < 300) {
      return response.data;
    } else {
      throw new Error(`HTTP Error: ${response.statusCode}`, { cause: response });
    }
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
};
