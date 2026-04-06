import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './app.css'

const queryClient = new QueryClient()

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}


export default App
