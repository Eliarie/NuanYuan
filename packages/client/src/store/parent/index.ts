import { create } from 'zustand'

export type ParentTabValue = 'ps-0' | 'ps-1' | 'ps-2' | 'ps-mine'

interface ParentState {
  activeTab: ParentTabValue
  setActiveTab: (tab: ParentTabValue) => void
  currentChildId: string | null
  setCurrentChildId: (id: string | null) => void
}

export const useParentStore = create<ParentState>((set) => ({
  activeTab: 'ps-0',
  setActiveTab: (tab) => set({ activeTab: tab }),
  currentChildId: null,
  setCurrentChildId: (id) => set({ currentChildId: id }),
}))
