import { View, Text, ScrollView } from '@tarojs/components'
import Card from '../../../../components/Card'
import Avatar from '../../../../components/Avatar'
import { useTeacherStore } from '../../../../store/teacher'

const MOCK_CHILDREN = [
  { id: 'c1', name: '李轩轩', age: '4岁半', tags: ['活跃', '创造力'], status: '需关注', avatar: '', parents: [{ id: 'p1', role: '妈妈' }] },
  { id: 'c2', name: '王梦琪', age: '5岁', tags: ['文静', '阅读'], status: '已推优', avatar: '', parents: [{ id: 'p2', role: '爸爸' }, { id: 'p3', role: '奶奶' }] },
  { id: 'c3', name: '张小虎', age: '4岁', tags: ['运动健将', '爱分享'], status: '日常', avatar: '', parents: [] },
]

export const ChildProfileList = () => {
  const currentClassId = useTeacherStore(state => state.currentClassId)

  // TODO: 实际获取数据时，使用 currentClassId
  console.log('Fetching children for class:', currentClassId)

  return (
    <ScrollView scrollY className="h-full bg-[#fbfaf8] p-4">
      <View className="mb-6 flex justify-between items-center px-1">
        <Text className="text-[22px] font-bold text-[#4d3a1d]">大二班档案</Text>
        <View className="bg-white px-3 py-1.5 rounded-full border border-[#ebe7de] shadow-sm">
          <Text className="text-[13px] text-[#8d8a85]">共 32 人</Text>
        </View>
      </View>

      <View className="flex flex-col gap-4">
        {MOCK_CHILDREN.map((child) => (
          <Card key={child.id} className="p-4 flex flex-row items-start relative hover:bg-[#fffdfa] transition-colors" hover>
            <Avatar src={child.avatar} text={child.name[child.name.length-1]} size="md" className="mr-4 mt-1" />
            
            <View className="flex-1">
              <View className="flex justify-between items-center mb-1.5">
                <Text className="font-bold text-[18px] text-[#4d3a1d]">{child.name}</Text>
                <Text className="text-[13px] text-[#e59554] bg-[#fdf5eb] px-2 py-0.5 rounded-md font-medium">{child.status}</Text>
              </View>
              <View className="flex items-center gap-2 mb-2">
                <Text className="text-[13px] text-[#8d8a85]">{child.age}</Text>
                {child.parents && child.parents.length > 0 && (
                  <Text className="text-[12px] text-[#a3a09a]">
                    已绑定: {child.parents.map(p => p.role).join(', ')}
                  </Text>
                )}
              </View>
              
              <View className="flex gap-2 flex-wrap mt-2">
                {child.tags.map(tag => (
                  <View key={tag} className="bg-[#f5f3ec] px-2.5 py-1 rounded-full border border-[#ebe7de]/50">
                     <Text className="text-[#645c4e] text-[12px]">{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  )
}

export default ChildProfileList
