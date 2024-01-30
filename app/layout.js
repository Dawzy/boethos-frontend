import { Inter } from 'next/font/google'
import { AppProvider } from '@/contexts/AppContext'
import Nav from '@/Components/Nav/Nav.js'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Boethos',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="en">
      <body className={inter.className + " flex flex-col h-full overflow-hidden"}>
        <Toaster />
        <AppProvider>
          <Nav />
          <div className="flex flex-col items-center p-2 flex-1 border-2 m-2 rounded-xl">
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  )
}
