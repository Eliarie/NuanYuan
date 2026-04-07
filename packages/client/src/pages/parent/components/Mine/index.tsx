import { View, Text } from '@tarojs/components'
import { Card } from '../../../../components/Card'
import { useParentStore } from '../../../../store/parent'

const MOCK_CHILDREN = [
  { id: 'c1', name: '李轩轩', role: '妈妈' },
  { id: 'c2', name: '李小宝', role: '妈妈' }
]

export const Mine = () => {
  const currentChildId = useParentStore(state => state.currentChildId)
  const setCurrentChildId = useParentStore(state => state.setCurrentChildId)

  // 默认选中第一个孩子
  const activeChild = MOCK_CHILDREN.find(c => c.id === currentChildId) || MOCK_CHILDREN[0]

  return (
    <View className="h-full bg-orange-50/50 flex flex-col items-center justify-start pt-12 gap-8 px-4">
      <View className="flex flex-col items-center gap-2">
        <View className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center border-4 border-white shadow-md">
            <Text className="text-3xl">👨‍👩‍👧</Text>
        </View>
        <Text className="text-xl font-bold text-gray-800 tracking-wider">家长端</Text>
      </View>

      {/* 孩子切换区域 */}
      <View className="w-full flex flex-row gap-3 overflow-x-auto px-1">
        {MOCK_CHILDREN.map(child => (
          <View
            key={child.id}
            className={`px-4 py-2 rounded-full border ${activeChild.id === child.id ? 'bg-orange-100 border-orange-300 text-orange-800' : 'bg-white border-gray-200 text-gray-600'} transition-colors`}
            onClick={() => setCurrentChildId(child.id)}
          >
            <Text className="text-sm font-medium">{child.name} ({child.role})</Text>
          </View>
        ))}
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
