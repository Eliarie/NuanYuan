import { View, Text } from '@tarojs/components'
import Avatar from '../Avatar'

export interface ChatBubbleProps {
  type: 'teacher' | 'ai'
  content: string
  avatarUrl?: string
  status?: 'sending' | 'success' | 'failed' // useful for later
}

export const ChatBubble = ({ type, content, avatarUrl }: ChatBubbleProps) => {
  const isTeacher = type === 'teacher'
  
  return (
    <View className={`flex w-full mb-4 px-4 ${isTeacher ? 'flex-row-reverse' : 'flex-row'}`}>
      <View className="flex-shrink-0">
        <Avatar src={avatarUrl} size="sm" fallback={isTeacher ? 'T' : 'AI'} className={isTeacher ? 'ml-3' : 'mr-3'} />
      </View>
      <View 
        className={`max-w-[75%] px-4 py-3 rounded-2xl ${
          isTeacher 
            ? 'bg-[#e59554] text-white rounded-tr-sm' 
            : 'bg-white text-[#4d3a1d] rounded-tl-sm shadow-[0_4px_12px_rgba(77,58,29,0.05)]'
        }`}
      >
        <Text className="text-[15px] leading-relaxed break-words block whitespace-pre-wrap">{content}</Text>
      </View>
    </View>
  )
}

export default ChatBubble
