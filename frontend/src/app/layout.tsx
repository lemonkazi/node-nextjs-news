import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Next.js App',
  description: 'A Next.js application',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white`}
      >
        <header className='border-b border-gray-200 bg-white shadow-sm dark:bg-gray-800'>
          <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
            <h1 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
              My Modern Blog
            </h1>
            <nav className='space-x-4'>
              <a
                href='/'
                className='text-gray-600 transition hover:text-blue-600'
              >
                Home
              </a>
              <a
                href='/about'
                className='text-gray-600 transition hover:text-blue-600'
              >
                About
              </a>
            </nav>
          </div>
        </header>
        <main className='min-h-screen'>{children}</main>
        <footer className='border-t border-gray-200 bg-white py-6 text-center text-sm text-gray-500 dark:bg-gray-800'>
          © {new Date().getFullYear()} My Modern Blog. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
