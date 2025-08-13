'use client'
// React / Next Components or Hooks
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Styles
import css from '@/components/page/Top/TopPage.module.css'

// Components
import Blog from '@/components/page/Top/Blog/Blog'

// Utilities
// import { detectLanguage, getLocale } from '@/utils/lang/languageDetector'
// import { FormattedMessage, IntlProvider } from 'react-intl'

// Images
import btnForwardArrowIcon from '/public/images/blue-forward-arrow.svg'

const blogPage = process.env.NEXT_PUBLIC_BLOG_PAGE ?? '/'

const BlogSection = (props: any) => {
  const { blogs } = props
  // i am getting blogs.data from props i want to pass it to Blog component
  const blogsData = blogs.data || []

  // const locale = getLocale()

  // const lang = detectLanguage(locale)

  return (
    <React.Fragment>
      <Blog blogs={blogsData} />
    </React.Fragment>
  )
}

export default BlogSection
