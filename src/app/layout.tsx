'use client'

import './tailwind.css'
import './globals.css'


import { Provider } from 'react-redux'
import { store } from '@/store/store' // Update the path to your actual store file

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="h-full">
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}