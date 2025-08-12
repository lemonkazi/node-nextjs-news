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
    // const locale = getLocale()
    // const lang = detectLanguage(locale)

    return (
        <React.Fragment>
            <div className="text-center">
                <h1 className='text-dark letter font-roboto text-3xl font-bold not-italic tracking-[3.2px]'>
                BLOG
                </h1>
            </div>
            <div
                className={`${css.slider} md:px-auto px-auto relative mx-auto mb-[52px] mt-9 max-w-[1080px] py-0 pl-4 md:mb-10 lg:pl-0`}
            >
                <Blog blogs={blogs} />
            </div>
        </React.Fragment>
    )
}

export default BlogSection
