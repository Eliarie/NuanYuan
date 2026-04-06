import { View } from '@tarojs/components'
import Header from '../../components/Header'
import BottomNav from '../../components/BottomNav'
import { useTeacherStore } from '../../store/teacher'
import ChatHole from './components/ChatHole'
import ChildProfileList from './components/ChildProfileList'
import Review from './components/Review'
import Mine from './components/Mine'

import './index.css'

export default function TeacherIndex() {
  const { activeTab, setActiveTab } = useTeacherStore()

  const tabs = [
    { value: 'ts-0', label: '树洞', icon: '💬' },
    { value: 'ts-1', label: '档案', icon: '📇' },
    { value: 'ts-2', label: '回顾', icon: '📊' },
    { value: 'ts-mine', label: '我的', icon: '👤' },
  ]

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'ts-0': return <ChatHole />
      case 'ts-1': return <ChildProfileList />
      case 'ts-2': return <Review />
      case 'ts-mine': return <Mine />
      default: return null
    }
  }

  const getHeaderTitle = () => {
    switch (activeTab) {
      case 'ts-0': return '暖园树洞'
      case 'ts-1': return '全班宝宝'
      case 'ts-2': return '数据分析'
      case 'ts-mine': return '我'
      default: return ''
    }
  }

  return (
    <View className="h-screen flex flex-col pt-safe bg-[#fbfaf8]">
      <Header title={getHeaderTitle()} showBack={false} />
      
      <View className="flex-1 overflow-hidden">
        {renderActiveTab()}
      </View>

      <View className="pb-safe shrink-0 mt-auto shadow-[0_-10px_30px_rgba(77,58,29,0.06)] bg-[#fcfcfd]/90 backdrop-blur-md relative z-50">
          <BottomNav 
            items={tabs}
            activeValue={activeTab}
            onChange={(val) => setActiveTab(val as any)}
            className="!border-transparent !bg-transparent pt-3 pb-1"
          />
      </View>
    </View>
  )
}
