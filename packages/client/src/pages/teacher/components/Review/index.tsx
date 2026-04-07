import { View, Text, ScrollView } from '@tarojs/components'
import Card from '../../../../components/Card'

const MOCK_STATS = {
  totalChats: 125,
  pushedRecords: 42,
  aiInsights: 8,
}

const MOCK_INSIGHTS = [
  { id: '1', content: '近期班级情绪波动平稳，孩子们在户外活动时表现出强烈的探索欲。', teacherName: '林老师' },
  { id: '2', content: '针对轩轩和小明的冲突，建议安排合作类游戏以增强团队协作意识。', teacherName: '王老师' }
]

export const Review = () => {
  return (
    <ScrollView scrollY className="h-full bg-[#fbfaf8] p-4">
      <View className="mb-6 px-1">
        <Text className="text-[24px] font-bold text-[#4d3a1d] block mb-1">一周回顾</Text>
        <Text className="text-[14px] text-[#8d8a85]">2026.04.01 - 2026.04.07</Text>
      </View>

      <View className="grid grid-cols-2 gap-4 mb-6">
        <Card className="p-4 flex flex-col justify-center items-center shadow-sm border border-[#ebe7de]/60">
          <Text className="text-[32px] font-bold text-[#e59554] mb-1">{MOCK_STATS.totalChats}</Text>
          <Text className="text-[13px] text-[#8d8a85] font-medium">树洞倾诉次数</Text>
        </Card>
        <Card className="p-4 flex flex-col justify-center items-center shadow-sm border border-[#ebe7de]/60">
          <Text className="text-[32px] font-bold text-[#e59554] mb-1">{MOCK_STATS.pushedRecords}</Text>
          <Text className="text-[13px] text-[#8d8a85] font-medium">生成推优记录</Text>
        </Card>
      </View>

      <Card className="p-5 mb-4 shadow-md shadow-[#4d3a1d]/5 relative overflow-hidden bg-gradient-to-br from-white to-[#fffaf2]">
        <View className="absolute top-0 right-0 p-4 opacity-10">
            <Text className="text-[60px]">✨</Text>
        </View>
        <Text className="text-[18px] font-bold text-[#4d3a1d] mb-4 flex items-center gap-2">
           <Text className="text-[#e59554]">AI</Text> 综合洞察
        </Text>
        <View className="flex flex-col gap-3 relative z-10">
          {MOCK_INSIGHTS.map((insight) => (
            <View key={insight.id} className="flex gap-3">
              <View className="w-1.5 h-1.5 rounded-full bg-[#e59554] mt-2 shrink-0 opacity-80" />
              <View className="flex-1">
                <Text className="text-[15px] text-[#645c4e] leading-relaxed break-words block">{insight.content}</Text>
                {insight.teacherName && (
                  <Text className="text-[12px] text-[#a3a09a] mt-1 block">记录人: {insight.teacherName}</Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </Card>

    </ScrollView>
  )
}

export default Review
