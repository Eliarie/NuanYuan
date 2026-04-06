import { View, Text, Textarea } from '@tarojs/components'
import { useState } from 'react'
import { Card } from '../../../../components/Card'
import { Input } from '../../../../components/Input'

export const NotifyTeacher = () => {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')

  const handleSubmit = () => {
    // mock submit
    console.log('提交反馈:', { title, content })
    setContent('')
    setTitle('')
  }
  
  return (
    <View className="p-4 space-y-6 flex flex-col items-center">
      <View className="text-center mt-4">
        <Text className="text-2xl font-bold text-orange-900 block mb-2">告诉老师</Text>
        <Text className="text-sm text-gray-500">有什么情况想叮嘱老师？记录下来吧。</Text>
      </View>

      <Card className="w-full p-4 space-y-4 shadow-[0_10px_20px_rgba(77,58,29,0.05)] rounded-2xl">
        <View className="space-y-2">
            <Text className="text-sm font-medium text-gray-700">主题/要点</Text>
            <Input
                value={title}
                onInput={(e) => setTitle(e.detail.value)}
                placeholder="例如：孩子今天没吃早餐，肠胃不舒服..."
            />
        </View>
        <View className="space-y-2">
             <Text className="text-sm font-medium text-gray-700">详细情况</Text>
             <Textarea
                className="w-full h-32 p-3 bg-gray-50 rounded-xl text-base border-none focus:ring-2 focus:ring-orange-200 focus:bg-white transition-all shadow-inner"
                value={content}
                onInput={(e) => setContent(e.detail.value)}
                placeholder="详细描述一下..."
             />
        </View>
        <View
          onClick={handleSubmit}
          className="w-full h-12 bg-orange-400 rounded-xl flex items-center justify-center active:bg-orange-500 hover:bg-orange-400 shadow-[0_4px_12px_rgba(251,146,60,0.3)] transition-all mt-4"
        >
          <Text className="font-bold text-white tracking-wider">提交给班级老师</Text>
        </View>
      </Card>
      
       <View className="mt-8 opacity-60">
           <Text className="text-center text-xs text-gray-400">提醒：您的信息将由班级老师直接查看</Text>
       </View>
    </View>
  )
}
