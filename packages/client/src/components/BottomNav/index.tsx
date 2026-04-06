import { View, Text } from '@tarojs/components'
import { ReactNode } from 'react'

export interface NavItem {
  label: string
  icon: ReactNode // Svg or text based icon
  value: string | number
}

export interface BottomNavProps {
  items: NavItem[]
  activeValue: string | number
  onChange: (value: string | number) => void
  className?: string
}

export const BottomNav = ({ items, activeValue, onChange, className = '' }: BottomNavProps) => {
  return (
    <View className={`bg-[#fcfcfd] border-t-[1px] border-[#ebe7de] flex py-2 pb-[18px] shrink-0 w-full ${className}`}>
      {items.map((item) => {
        const isActive = activeValue === item.value

        return (
          <View
            key={`nav-${item.value}`}
            className={`flex-1 flex flex-col items-center gap-1 cursor-pointer py-1 text-[11px] transition-colors duration-200 ${
              isActive ? 'text-[#e59554] font-bold' : 'text-[#8d8a85]'
            }`}
            onClick={() => onChange(item.value)}
          >
            <View className="w-5 h-5 flex items-center justify-center leading-none">
              {/* If SVG is used as ReactNode it will be rendered here.
                  SVG logic must receive valid child elements compatible with Taro on MP */}
              {item.icon}
            </View>
            <Text className="leading-none">{item.label}</Text>
          </View>
        )
      })}
    </View>
  )
}

export default BottomNav
