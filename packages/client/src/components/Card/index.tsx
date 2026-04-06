import { View } from '@tarojs/components'
import { ReactNode } from 'react'

export interface CardProps {
  children?: ReactNode
  className?: string
  onClick?: () => void
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export const Card = ({
  children,
  className = '',
  onClick,
  hover = false,
  padding = 'md'
}: CardProps) => {
  const baseClasses = 'bg-white rounded-2xl md:rounded-3xl shadow-card transition-all duration-200'
  
  const hoverClasses = hover ? 'hover:shadow-hover hover:-translate-y-[2px] cursor-pointer' : ''
  const hoverActiveParams = hover ? { hoverClass: 'scale-[0.98]' } : {}
  
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  }

  return (
    <View
      className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`}
      onClick={onClick}
      {...hoverActiveParams}
    >
      {children}
    </View>
  )
}

export default Card
