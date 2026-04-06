import { Input as TaroInput, InputProps as TaroInputProps, View } from '@tarojs/components'
import React from 'react'

export interface InputProps extends TaroInputProps {
  className?: string
  placeholder?: string
}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <TaroInput
      className={`bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all ${className}`}
      {...props}
    />
  )
}
