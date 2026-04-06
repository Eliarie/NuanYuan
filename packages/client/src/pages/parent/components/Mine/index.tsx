import { View, Text } from '@tarojs/components'
import { Card } from '../../../../components/Card'

export const Mine = () => {
  return (
    <View className="h-full bg-orange-50/50 flex flex-col items-center justify-start pt-12 gap-8 px-4">
      <View className="flex flex-col items-center gap-2">
        <View className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center border-4 border-white shadow-md">
            <Text className="text-3xl">👨‍👩‍👧</Text>
        </View>
        <Text className="text-xl font-bold text-gray-800 tracking-wider">家长端</Text>
      </View>
      <Card className="w-full h-40 flex flex-col items-center justify-center gap-4 border border-dashed border-orange-200 bg-white/50 backdrop-blur-sm">
        <View className="bg-orange-100 rounded-full p-3">
          <Text className="text-2xl">🌱</Text>
        </View>
        <Text className="text-gray-500 font-medium">健康档案/成长报告（即将上线）</Text>
      </Card>
      
       <Card className="w-full flex flex-col px-4 py-2 mt-4 shadow-[0_4px_16px_rgba(77,58,29,0.03)]">
         {['关联宝宝', '设置', '关于暖园'].map((item, index) => (
            <View key={item} className={`flex justify-between items-center py-4 ${index !== 2 ? 'border-b border-gray-100' : ''}`}>
               <Text className="text-gray-700 font-medium">{item}</Text>
               <Text className="text-gray-300">{'>'}</Text>
            </View>
         ))}
       </Card>
    </View>
  )
}
