
'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './TopPage.module.css'
import BlogLayoutComponent from '@/components/page/Top/BlogLayout'

const Top = () => {
  const [isBlogLayoutView, setIsBlogLayoutView] = useState(false)

  useEffect(() => {
    setIsBlogLayoutView(true)
  }, [])
  return (
    <main className={styles.container}>
      <div className={isBlogLayoutView ? 'block' : 'hidden'}>
        <BlogLayoutComponent />
      </div>
    </main>
  )
}

export default Top