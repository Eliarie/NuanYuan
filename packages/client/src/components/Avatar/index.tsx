import { View, Image, Text } from '@tarojs/components'

export interface AvatarProps {
  src?: string
  icon?: string
  text?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  alt?: string
  className?: string
  bgGradient?: string
  bgColor?: string
}

export const Avatar = ({
  src,
  icon,
  text,
  size = 'md',
  alt = 'avatar',
  className = '',
  bgGradient,
  bgColor
}: AvatarProps) => {
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-xl',
    lg: 'w-16 h-16 text-3xl',
    xl: 'w-[68px] h-[68px] text-[34px]'
  }

  const baseClasses = 'shrink-0 rounded-full flex items-center justify-center overflow-hidden aspect-square'
  
  // Default backgrounds based on prototype if none provided and no image
  let finalStyle = {}
  let bgClass = 'bg-[#FFF9D0]' // default amber fallback

  if (!src) {
    if (bgGradient) {
      finalStyle = { background: bgGradient }
      bgClass = ''
    } else if (bgColor) {
      finalStyle = { background: bgColor }
      bgClass = ''
    } else if (icon === '👩‍🏫' || text) {
      // standard logic based on content
      finalStyle = { background: 'rgba(255,255,255,0.25)' }
      bgClass = ''
    }
  }

  return (
    <View 
      className={`${baseClasses} ${sizeClasses[size]} ${bgClass} ${className}`}
      style={finalStyle}
    >
      {src ? (
        <Image src={src} className="w-full h-full object-cover" />
      ) : icon ? (
        <Text className="leading-none">{icon}</Text>
      ) : text ? (
        <Text className="leading-none font-bold text-gray-700">{text.charAt(0)}</Text>
      ) : (
        <View className="w-full h-full bg-gray-200" />
      )}
    </View>
  )
}

export default Avatar
