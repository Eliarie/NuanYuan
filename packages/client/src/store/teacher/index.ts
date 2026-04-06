import { create } from 'zustand'

type TabValue = 'ts-0' | 'ts-1' | 'ts-2' | 'ts-3' | 'ts-mine'

interface TeacherState {
  activeTab: TabValue
  setActiveTab: (tab: TabValue) => void
}

export const useTeacherStore = create<TeacherState>((set) => ({
  activeTab: 'ts-0',
  setActiveTab: (tab) => set({ activeTab: tab }),
}))
