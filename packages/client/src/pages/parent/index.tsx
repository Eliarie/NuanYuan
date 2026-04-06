import { View } from '@tarojs/components'
import { Header } from '../../components/Header'
import { BottomNav } from '../../components/BottomNav'
import { useParentStore } from '../../store/parent'

import { ActivityFeed } from './components/ActivityFeed'
import { AIHelper } from './components/AIHelper'
import { NotifyTeacher } from './components/NotifyTeacher'
import { Mine } from './components/Mine'
import './index.css'

export default function ParentIndex() {
  const { activeTab, setActiveTab } = useParentStore()

  const tabs = [
    { id: 'ps-0' as const, label: '最新动态', icon: '📝' },
    { id: 'ps-1' as const, label: '育儿助手', icon: '🤖' },
    { id: 'ps-2' as const, label: '告诉老师', icon: '✍️' },
    { id: 'ps-mine' as const, label: '我的', icon: '👤' },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'ps-0':
        return <ActivityFeed />
      case 'ps-1':
        return <AIHelper />
      case 'ps-2':
        return <NotifyTeacher />
      case 'ps-mine':
        return <Mine />
      default:
        return null
    }
  }

  return (
    <View className="min-h-screen bg-orange-50/30 flex flex-col">
      <Header title={tabs.find(t => t.id === activeTab)?.label} />
      
      <View className="flex-1 overflow-y-auto pb-[calc(88px+env(safe-area-inset-bottom))]">
        {renderContent()}
      </View>

      <BottomNav
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab as (id: any) => void}
      />
    </View>
  )
}
