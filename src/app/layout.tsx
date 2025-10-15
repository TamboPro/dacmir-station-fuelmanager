import type { Metadata } from 'next'
import './tailwind.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dacmir Station Fuel Manager',
  description: 'Interface de gestion de station-service Dacmir',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="h-full">
        {children}
      </body>
    </html>
  )
}