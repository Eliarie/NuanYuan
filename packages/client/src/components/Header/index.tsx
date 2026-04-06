import { View, Image, Text } from '@tarojs/components'
import LogoIcon from '../../../../../assets/logo01.png'
import LogoWordmark from '../../../../../assets/logo02.png'

export interface HeaderProps {
  roleMeta?: string
  className?: string
}

export const Header = ({ roleMeta, className = '' }: HeaderProps) => {
  return (
    <View 
      className={`bg-gradient-to-br from-[#f2e8d5] to-[#f8f3e7] px-5 pt-11 pb-3.5 text-[#2f2c2a] shrink-0 border-b-[1px] border-[#e7decc] ${className}`}
    >
      <View className="flex items-start justify-between gap-3.5 w-full">
        {/* Left Side: Brand Stack */}
        <View className="flex flex-col items-start gap-1 min-w-0 flex-1">
          <View className="flex items-end gap-1.5 min-w-0">
            <View className="flex items-end gap-1.5 p-0 bg-transparent border-none">
              <Image 
                className="h-[42px] w-auto object-contain [transform:translateZ(0)]"
                style={{
                  filter: 'saturate(1.03) contrast(1.03) drop-shadow(0 -1px 0 rgba(255,255,255,.46)) drop-shadow(0 1px 0 rgba(255,255,255,.24)) drop-shadow(1px 0 0 rgba(255,255,255,.2)) drop-shadow(-1px 0 0 rgba(255,255,255,.2)) drop-shadow(0 2px 3px rgba(129,97,43,.16)) drop-shadow(0 6px 10px rgba(129,97,43,.12))'
                }}
                src={LogoIcon} 
                mode="aspectFit" 
              />
              <Image 
                className="h-[28px] w-auto object-contain max-w-[400px] ml-[-1px]"
                style={{
                  filter: 'saturate(1.02) contrast(1.02) drop-shadow(0 -1px 0 rgba(255,255,255,.35)) drop-shadow(0 1px 0 rgba(255,255,255,.2)) drop-shadow(0 2px 3px rgba(128,96,36,.14)) drop-shadow(0 6px 10px rgba(128,96,36,.1))'
                }}
                src={LogoWordmark} 
                mode="aspectFit" 
              />
            </View>
          </View>
          <Text className="text-[10px] text-[#706c66] tracking-[0.2px] leading-tight">
            better connections, real growth.
          </Text>
        </View>

        {/* Right Side: Role Meta */}
        {roleMeta && (
          <View className="text-sm text-[#756f62] font-bold leading-tight text-right pt-2 whitespace-nowrap">
            {roleMeta}
          </View>
        )}
      </View>
    </View>
  )
}

export default Header
