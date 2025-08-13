/* eslint-disable @next/next/no-img-element */
'use client'

// React / Next Components or Hooks
// import { Skeleton } from '@/components/ui/shadcn'
import type { Blog } from '@/models/Top/blog'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// Packages

// Images
import nextImage from '/public/images/top/arrow-next.svg'
import prevImage from '/public/images/top/arrow-prev.svg'

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

  const NextArrow = (props: any) => {
    const { className, length } = props
    const slides = width > 1024 ? 3 : width > 767 ? 2 : 1
    const display = activeSlide > length - slides ? 'none' : 'block'

    return (
      <Image
        className={className}
        src={nextImage}
        width={100}
        height={100}
        style={{ display: display }}
        alt='Next'
      />
    )
  }

  const PrevArrow = (props: any) => {
    const { className, length } = props
    const display =
      length >= 5
        ? activeSlide === 0 || length <= 5
          ? 'none'
          : 'block'
        : 'none'

    return (
      <Image
        className={className}
        src={prevImage}
        width={60}
        height={60}
        style={{ display: display }}
        alt='Previous'
      />
    )
  }

  const disableNextArrow = () => {
    const slides = width > 1024 ? 3 : width > 767 ? 2 : 1

    return activeSlide === blogs.length - slides
  }

  return (
    <>
      {(blogs ? blogs.length > 0 : false) &&
        blogs.map((blog: any, index: number) => (
          <a
            key={index}
            href={blog.link}
            id={`ga4_click4_${index + 1}`}
            className='!inline-block text-xs no-underline sm:w-[340px]'
          >
            <div className='relative h-[188px] w-full overflow-hidden lg:h-[200px] lg:w-[340px]'>
              {/* Do not use Image component on this one. blog.image is url coming from wordpress. If you use Image component it will ask an authorization always and it always fail */}
              {blog.isLoading ? (
                <p>{blog.title}</p>
              ) : (
                // <img
                //   src='/images/top/blog/4.jpg'
                //   className='absolute h-[188px] w-full rounded-tl-[15px] rounded-tr-[15px] object-cover object-top lg:h-[200px] lg:w-[340px]'
                //   alt={blog.title}
                // />
                //   <Skeleton className='h-[200px] w-[340px]' />
                <img
                  src={blog.image}
                  className='absolute h-[188px] w-full rounded-tl-[15px] rounded-tr-[15px] object-cover object-top lg:h-[200px] lg:w-[340px]'
                  alt={blog.title.rendered}
                />
              )}
            </div>
            <div className='mx-0 my-auto mt-0 h-[129px] w-80 p-0 pl-5 pt-5 text-left font-normal lg:w-[340px]'>
              <h4 className='mb-5 text-xs font-medium not-italic normal-nums leading-[18px] tracking-normal'>
                {/* {formatDate(blog.date, 'horizontal')} */}
              </h4>
              <p className='py-auto mx-0 mb-[38px] w-[280px] break-words text-base font-bold not-italic normal-nums tracking-normal md:w-[300px]'>
                {blog.title.rendered}
              </p>
            </div>
          </a>
        ))}
    </>
  )
}

export default Blog
