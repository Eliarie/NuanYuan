import { View, Text, ScrollView } from '@tarojs/components'
import Card from '../../../../components/Card'
import Avatar from '../../../../components/Avatar'

const MOCK_USER = {
  name: '林老师',
  phone: '138****8888',
  school: '第一幼儿园',
  joinDays: 145,
  avatar: ''
}

export const Mine = () => {
  return (
    <ScrollView scrollY className="h-full bg-[#fbfaf8] p-4">
      <View className="flex flex-col items-center pt-8 pb-6">
        <View className="relative mb-4">
          <Avatar src={MOCK_USER.avatar} fallback={MOCK_USER.name[0]} size="lg" className="w-24 h-24 text-[32px] border-4 border-white shadow-md shadow-[#4d3a1d]/10" />
          <View className="absolute bottom-0 right-0 bg-[#e59554] w-7 h-7 rounded-full flex items-center justify-center border-2 border-white">
            <Text className="text-white text-[12px] font-bold">V</Text>
          </View>
        </View>
        <Text className="text-[26px] font-bold text-[#4d3a1d] mb-1.5">{MOCK_USER.name}</Text>
        <Text className="text-[14px] text-[#8d8a85] bg-[#ebe7de]/40 px-3 py-1 rounded-full">{MOCK_USER.school}</Text>
      </View>

      <Card className="p-0 mb-6 shadow-[#4d3a1d]/5 hover:shadow-[#4d3a1d]/10 transition-shadow">
        <View className="flex items-center justify-between p-5 border-b border-[#ebe7de]/30 active:bg-[#fbfaf8]">
          <View className="flex items-center gap-3">
            <View className="w-8 h-8 rounded-full bg-[#fdf5eb] flex items-center justify-center">
              <Text className="text-[16px]">📱</Text>
            </View>
            <Text className="text-[16px] text-[#4d3a1d] font-medium">账号信息</Text>
          </View>
          <View className="flex items-center gap-2">
            <Text className="text-[14px] text-[#8d8a85]">{MOCK_USER.phone}</Text>
            <Text className="text-[14px] text-[#8d8a85]">{'>'}</Text>
          </View>
        </View>

        <View className="flex items-center justify-between p-5 border-b border-[#ebe7de]/30 active:bg-[#fbfaf8]">
          <View className="flex items-center gap-3">
            <View className="w-8 h-8 rounded-full bg-[#fdf5eb] flex items-center justify-center">
              <Text className="text-[16px]">⚙️</Text>
            </View>
            <Text className="text-[16px] text-[#4d3a1d] font-medium">通用设置</Text>
          </View>
          <Text className="text-[14px] text-[#8d8a85]">&gt;</Text>
        </View>
        
        <View className="flex items-center justify-between p-5 active:bg-[#fbfaf8]">
          <View className="flex items-center gap-3">
            <View className="w-8 h-8 rounded-full bg-[#fdf5eb] flex items-center justify-center">
              <Text className="text-[16px]">💡</Text>
            </View>
            <Text className="text-[16px] text-[#4d3a1d] font-medium">关于暖园</Text>
          </View>
          <View className="flex items-center gap-2">
            <Text className="text-[12px] text-[#8d8a85] bg-[#f5f3ec] px-2 py-0.5 rounded">v1.0.0</Text>
            <Text className="text-[14px] text-[#8d8a85]">&gt;</Text>
          </View>
        </View>
      </Card>

      <View className="mt-8 px-4 flex justify-center">
        <View className="py-3 px-12 bg-[#ffebee]/80 rounded-full active:bg-[#ffd6da] transition-colors">
          <Text className="text-[#e57373] text-[15px] font-bold">退出登录</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Mine
