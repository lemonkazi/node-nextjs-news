/* eslint-disable @next/next/no-img-element */
'use client'

// React / Next Components or Hooks
// import { Skeleton } from '@/components/ui/shadcn'
import type { Blog } from '@/models/Top/blog'
import { useEffect, useState } from 'react'

// Packages

// Images

// Utils
// import { formatDate } from '@/utils/utils'

const Blog = (props: any) => {
  const { blogs } = props
  const [activeSlide, setActiveSlide] = useState(0)
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  )
  // const blogPage = process.env.NEXT_PUBLIC_BLOG_PAGE ?? '/'

  useEffect(() => {
    window.addEventListener('load', () => {
      if (typeof window !== 'undefined') {
        handleResize()
      }
    })
    window.addEventListener('resize', () => {
      handleResize()
    })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('load', handleResize)
    }
  }, [props])

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  return (
    <>
      {(blogs ? blogs.length > 0 : false) &&
        blogs.map((post: any, index: number) => (
          <article className='transform overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
            {/* <img
              src={post.image}
              alt={post.title.rendered}
              className="h-48 w-full object-cover"
            /> */}
            <div className='p-5'>
              <h3 className='mb-2 text-lg font-semibold text-gray-900 hover:text-blue-600'>
                {post.title}
              </h3>
              <p className='mb-4 line-clamp-3 text-sm text-gray-600'>
                {post.content.replace(/<[^>]+>/g, '')}
              </p>
              <a
                href={`/blog/${post.id}`}
                className='font-medium text-blue-600 hover:underline'
              >
                Read more →
              </a>
            </div>
          </article>
        ))}
    </>
  )
}

export default Blog
