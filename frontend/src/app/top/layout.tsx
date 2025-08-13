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
        {/* <NavbarComponent /> */}
        {children}
        {/* <Footer /> */}
      </div>
    </>
  )
}



