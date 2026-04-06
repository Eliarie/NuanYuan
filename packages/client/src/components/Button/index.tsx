import { Button as TaroButton, ButtonProps as TaroButtonProps } from '@tarojs/components'
import React from 'react'

export interface ButtonProps extends TaroButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  fullWidth?: boolean
  className?: string
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'flex items-center justify-center font-bold tracking-wide transition-all active:scale-[0.98]'
  
  const variantClasses = {
    primary: 'bg-primary text-[#3D2E00] shadow-btn hover:bg-primary-dark',
    secondary: 'bg-[#1f1f20] text-[#f7f1e5] shadow-card',
    outline: 'bg-transparent border-[1.5px] border-[#e8d870] text-[#D4A017]',
    ghost: 'bg-transparent text-[#b0a060] hover:bg-[#fffef0]',
    icon: 'bg-[#f8f2e5] border-[1.5px] border-[#ddd1ba] text-xl rounded-full'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs rounded-full',
    md: 'px-5 py-3 text-[15px] rounded-[20px]',
    lg: 'px-6 py-4 text-base rounded-[24px]',
    icon: 'w-9 h-9 p-0 flex items-center justify-center'
  }

  const widthClass = fullWidth ? 'w-full' : ''
  const isIcon = variant === 'icon' || size === 'icon'
  
  // Custom button with hover states requires overriding some Taro defaults
  const customStyle = {
    margin: 0,
    lineHeight: 'normal',
    overflow: 'visible',
    fontFamily: 'inherit',
  }

  return (
    <TaroButton
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className} ${isIcon ? 'rounded-full' : ''}`}
      style={customStyle}
      hoverClass="none"
      {...props}
    >
      {children}
    </TaroButton>
  )
}

export default Button
