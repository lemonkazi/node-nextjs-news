// React / Next Components or Hooks
import dynamic from 'next/dynamic'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Components
// const NavbarComponent = dynamic(
//   () => import('@/components/ui/Navbar/NavbarServer'),
// )
//const Footer = dynamic(() => import('@/components/ui/Footer/Footer'))

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        {/* <div className={styles.App}>
            <header className={styles['App-header']}>
                <img src={'./logo.svg'} className={styles['App-logo']} alt="logo" />
                <h1 className={styles['App-title']}>Welcome to Next.js</h1>
            </header>
            <p className={styles['App-intro']}>{apiResponse}</p>
        </div> */}
        <link
            rel='preload'
            fetchPriority='high'
            as='image'
            href='/images/top/top-banner-compressed.webp'
            type='image/webp'
        />
        <link
            rel='preload'
            fetchPriority='high'
            as='image'
            href='/images/top/top-banner-sp-compressed.webp'
            type='image/webp'
        />
        <div>
          {children}
            {/* <QueryClientProvider client={queryClient}>
                
            </QueryClientProvider> */}
        </div>
      {/* <div>
        <NavbarComponent />
        {children}
        <Footer />
      </div> */}
    </>
  )
}



