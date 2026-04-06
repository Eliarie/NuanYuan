import { View, Text, ScrollView } from '@tarojs/components'
import { useState } from 'react'
import { ChatBubble } from '../../../../components/ChatBubble'
import { Input } from '../../../../components/Input'

export const AIHelper = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: '家长您好！我是暖园 AI 育儿助手，您可以向我咨询科学育儿知识、宝宝成长建议等哦。',
      createdAt: new Date().toISOString()
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (!inputValue.trim()) return
    const newMessage = {
      id: Date.now(),
      role: 'user',
      content: inputValue,
      createdAt: new Date().toISOString()
    }
    setMessages(prev => [...prev, newMessage])
    setInputValue('')
    // Mock AI Reply
    setTimeout(() => {
        setMessages(prev => [...prev, {
            id: Date.now() + 1,
            role: 'assistant',
            content: '好的，我了解了，这边建议您多观察宝宝的情况呢。',
            createdAt: new Date().toISOString()
        }])
    }, 1000)
  }

  return (
    <View className="h-full flex flex-col pt-4">
      <View className="px-4 mb-2 flex items-center gap-2">
         <View className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
             <Text className="text-xl">🤖</Text>
         </View>
         <Text className="font-medium text-orange-800">暖园 AI 育儿助手</Text>
      </View>
      <ScrollView
        scrollY
        className="flex-1 px-4 py-2"
        style={{ height: 'calc(100vh - 300px)' }}
      >
        <View className="flex flex-col gap-4 pb-20">
          {messages.map(msg => (
            <ChatBubble
              key={msg.id}
              role={msg.role as 'user' | 'assistant'}
              content={msg.content}
              time={new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            />
          ))}
        </View>
      </ScrollView>
      <View className="px-4 py-3 bg-white fixed bottom-[88px] left-0 right-0 border-t border-gray-100 flex gap-2 items-center">
        <Input
          value={inputValue}
          onInput={e => setInputValue(e.detail.value)}
          placeholder="问问育儿助手..."
          className="flex-1 flex"
          type="text"
          onConfirm={handleSend}
        />
        <View 
            className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center active:bg-orange-500"
            onClick={handleSend}
        >
            <Text className="text-white font-bold">↑</Text>
        </View>
      </View>
    </View>
  )
}
