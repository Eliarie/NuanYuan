import { View, Text } from '@tarojs/components'
import { Card } from '../../../../components/Card'

export const ActivityFeed = () => {
  const mockActivities = [
    {
      id: 1,
      time: '10:30 AM',
      title: '睡醒了，睡得很好',
      desc: '宝宝睡了2个小时，醒来精神很好，跟小朋友一起玩了积木。',
      type: 'sleep'
    },
    {
      id: 2,
      time: '12:00 PM',
      title: '午餐时间',
      desc: '今天吃了胡萝卜肉丝和米饭，胃口不错，全部吃完了。',
      type: 'eat'
    }
  ]

  return (
    <View className="p-4 space-y-4">
      <Text className="text-xl font-bold text-gray-800 mb-4 block">今日动态</Text>
      {mockActivities.map(activity => (
        <Card key={activity.id} className="p-4 flex flex-col gap-2">
          <View className="flex justify-between items-center">
            <Text className="font-medium text-gray-800">{activity.title}</Text>
            <Text className="text-sm text-gray-500">{activity.time}</Text>
          </View>
          <Text className="text-gray-600 text-sm">{activity.desc}</Text>
        </Card>
      ))}
    </View>
  )
}
