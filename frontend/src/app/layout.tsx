import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import styles from './testpage/newPage.module.css'

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
        <header className={styles.header}>
          <div
            className={`${styles.container} ${styles.headerInner}`}
            role='banner'
          >
            <Link
              href='/'
              className={styles.logo}
              aria-label='Your News Site Home'
            >
              YourNewsSite
            </Link>

            <nav
              className={styles.mainNav}
              role='navigation'
              aria-label='Primary navigation'
            >
              <ul>
                <li>
                  <Link href='/' tabIndex={0}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='/world' tabIndex={0}>
                    World
                  </Link>
                </li>
                <li>
                  <Link href='/tech' tabIndex={0}>
                    Tech
                  </Link>
                </li>
                <li>
                  <Link href='/business' tabIndex={0}>
                    Business
                  </Link>
                </li>
                <li>
                  <Link href='/sports' tabIndex={0}>
                    Sports
                  </Link>
                </li>
              </ul>
            </nav>

            <div className={styles.authButtons}>
              <Link
                href='/login'
                className={styles.login}
                aria-label='Login to your account'
              >
                Login
              </Link>
              <Link
                href='/signup'
                className={styles.signup}
                aria-label='Sign up for a new account'
              >
                Sign Up
              </Link>
            </div>
          </div>
        </header>

        <section
          className={styles.banner}
          role='img'
          aria-label='Breaking news banner image'
        >
          <h1>Stay Updated with the Latest Headlines Every Day</h1>
        </section>
        {/* <header className='border-b border-gray-200 bg-white shadow-sm dark:bg-gray-800'>
          <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
            <h1 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
              My Modern Blog
            </h1>
            <nav className='space-x-4'>
              <Link
                href='/'
                className='text-gray-600 transition hover:text-blue-600'
              >
                Home
              </Link>
              <Link
                href='/about'
                className='text-gray-600 transition hover:text-blue-600'
              >
                About
              </Link>
            </nav>
          </div>
        </header> */}
        <main className='min-h-screen'>{children}</main>
        <footer className={styles.footer}>
          <div className={styles.footerTop}>
            <div className={styles.container}>
            <section
              className={styles.footerSection}
              aria-labelledby='footer-top-menu'
            >
              <h3 id='footer-top-menu'>Menu</h3>
              <ul>
                <li>
                  <Link href='/' tabIndex={0}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='/world' tabIndex={0}>
                    World
                  </Link>
                </li>
                <li>
                  <Link href='/tech' tabIndex={0}>
                    Tech
                  </Link>
                </li>
                <li>
                  <Link href='/business' tabIndex={0}>
                    Business
                  </Link>
                </li>
                <li>
                  <Link href='/sports' tabIndex={0}>
                    Sports
                  </Link>
                </li>
              </ul>
            </section>

            <section
              className={`${styles.footerSection} ${styles.footerContact}`}
              aria-labelledby='footer-contact-title'
            >
              <h3 id='footer-contact-title'>Contact</h3>
              <p>Email: contact@yournewssite.com</p>
              <p>Phone: +1 234 567 8900</p>
              <p>Address: 123 News Street, City, Country</p>
            </section>

            <section
              className={`${styles.footerSection} ${styles.socialLinks}`}
              aria-label='Social media links'
            >
              <h3>Follow Us</h3>
              <a href='#' aria-label='Facebook' target='_blank' rel='noopener'>
                <svg
                  width='24'
                  height='24'
                  fill='currentColor'
                  aria-hidden='true'
                  focusable='false'
                >
                  <path d='M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.38c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z' />
                </svg>
              </a>
              <a href='#' aria-label='Twitter' target='_blank' rel='noopener'>
                <svg
                  width='24'
                  height='24'
                  fill='currentColor'
                  aria-hidden='true'
                  focusable='false'
                >
                  <path d='M22.46 6c-.77.35-1.5.58-2.28.69a4.03 4.03 0 001.77-2.22 8.23 8.23 0 01-2.6 1 4.1 4.1 0 00-7 3.74A11.65 11.65 0 013 5.16a4.14 4.14 0 001.27 5.5 4 4 0 01-1.85-.51v.05a4.12 4.12 0 003.3 4 4 4 0 01-1.83.07 4.12 4.12 0 003.84 2.89 8.25 8.25 0 01-5.1 1.76c-.33 0-.66-.02-.98-.06A11.6 11.6 0 008.29 20c7.55 0 11.68-6.25 11.68-11.68 0-.18 0-.35-.02-.53A8.35 8.35 0 0022.46 6z' />
                </svg>
              </a>
              <a href='#' aria-label='Instagram' target='_blank' rel='noopener'>
                <svg
                  width='24'
                  height='24'
                  fill='currentColor'
                  aria-hidden='true'
                  focusable='false'
                >
                  <path d='M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1 1 0 100 2 1 1 0 000-2z' />
                </svg>
              </a>
            </section>
          </div>
          </div>
          <div
            className={`${styles.footerBottom} ${styles.container}`}
            role='contentinfo'
          >
            <section
              className={`${styles.footerSection} ${styles.footerLogo}`}
              aria-label='Site logo and brand name'
            >
              YourNewsSite
            </section>
            <p>&copy; 2024 YourNewsSite. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
