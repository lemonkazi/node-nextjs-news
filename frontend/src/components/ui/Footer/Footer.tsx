'use client'
import { AppContext, AppContextType } from '@/providers/AppContextProvider'
// React / Next Components or Hooks
import dynamic from 'next/dynamic'
import { useContext, useEffect, useState } from 'react'

// Models

interface Props {
  showTopFooter?: boolean
  showFootNote?: boolean
  showBanner?: boolean
  showLargeScreen?: boolean
  enableFooterScrollFunction?: boolean
}

const Footer = ({
  showTopFooter = true,
  showFootNote = true,
  showBanner = true,
  showLargeScreen = true,
  enableFooterScrollFunction = true,
}: Props) => {
  const Banner = dynamic(() => import('@/components/ui/Banner/Banner'), {
    ssr: false,
  })
  const FooterSection = dynamic(() => import('./FooterSection'), { ssr: false })
  const FootNote = dynamic(() => import('./FootNote'), { ssr: false })
  const FooterLayout = dynamic(() => import('./FooterLayout'), { ssr: false })
  const [isFooterLayoutView, setIsFooterLayoutView] = useState(false)

  const app = useContext(AppContext) as AppContextType

  useEffect(() => {
    if (enableFooterScrollFunction) {
      const onScroll = () => {
        const { scrollY } = window
        if (scrollY > 300) {
          if (!isFooterLayoutView) {
            setIsFooterLayoutView(true)
          }
        }
      }
      //add eventlistener to window
      window.addEventListener('scroll', onScroll, { passive: true })
      // remove event on unmount to prevent a memory leak with the cleanup
      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    } else {
      setIsFooterLayoutView(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enableFooterScrollFunction])

  return (
    <div className={isFooterLayoutView ? 'block' : 'hidden'}>
      <div>{showFootNote && <FootNote />}</div>
    </div>
  )
}

export default Footer
