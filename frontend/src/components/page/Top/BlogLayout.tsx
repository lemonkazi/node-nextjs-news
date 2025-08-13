'use client'

import { blogTest } from '@/utils/blog-const'
import { BlogService } from '@/services/Top/blog'
import { DEFAULT_IMAGE } from '@/utils/const'
import { useState, useEffect, useRef } from 'react'
import { ClipLoader } from 'react-spinners' // optional if you want a spinner library
import styles from './TopPage.module.css'

// Packages
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import BlogSectionComponent from './Blog/BlogSection'

const blogService = new BlogService()
const isLocalUrl = process.env.NEXT_PUBLIC_API_ENDPOINT ?? ''

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
})

const requestImage = async (links: any) => {
  if (links['wp:featuredmedia']) {
    if (links['wp:featuredmedia'].length > 0) {
      const image = await blogService.getBlogImage(
        links['wp:featuredmedia'][0].href,
      )
      return image
    }
  }
  return DEFAULT_IMAGE
}

// Fixed recursive function - no global state mutation
const processPostsWithImages = async (posts: any[]): Promise<any[]> => {
  if (!posts || posts.length === 0) {
    return []
  }

  const processedPosts: any[] = []

  for (const post of posts) {
    const image = await requestImage(post._links)
    const processedPost = {
      ...post,
      isLoading: false,
      image: image,
    }
    processedPosts.push(processedPost)
  }

  return processedPosts
}

const fetchBlogs = async (page: number, limit: number = 5) => {
  try {
    // const posts = isLocalUrl.includes('localhost')
    //   ? blogTest
    //   : await blogService.getBlogs()

    const response = await blogService.getBlogs(page, limit)
    const posts = response.data || []

    console.log('Extracted posts data:', posts)

    if (!posts.data || posts.data.length === 0) {
      return []
    }
    // add blog posts and pagination array seperately
    const appendPosts = {
      data: posts.data.map((item: any) => ({
        ...item,
        isLoading: true, // Add loading state initially
      })),
      pagination: posts.pagination,
    }

    // Add loading state initially
    // const appendSinglePosts = posts.data.map((item: any) => ({
    //   ...item,
    //   isLoading: true,
    // }))

    // Process images
    //const processedPosts = await processPostsWithImages(appendPosts)
    return appendPosts
  } catch (error) {
    console.error('Error fetching blogs:', error)
    throw error
  }
}

const BlogContent = () => {
  const [page, setPage] = useState(1)
  const [showLoader, setShowLoader] = useState(false)
  const loadingStartTime = useRef<number | null>(null)

  const {
    data: blogs,
    isLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['topBlogs', page],
    queryFn: () => fetchBlogs(page),
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  // Enhanced loader control with minimum 2-second duration
  useEffect(() => {
    if (isLoading || isFetching) {
      // Start loading - record the time and show loader
      loadingStartTime.current = Date.now()
      setShowLoader(true)
    } else if (!isLoading && !isFetching && loadingStartTime.current) {
      // Data has loaded - calculate elapsed time
      const elapsedTime = Date.now() - loadingStartTime.current
      const minLoadingTime = 500 // 2 seconds minimum

      if (elapsedTime < minLoadingTime) {
        // If less than 2 seconds elapsed, wait for the remaining time
        const remainingTime = minLoadingTime - elapsedTime
        const timer = setTimeout(() => {
          setShowLoader(false)
          loadingStartTime.current = null
        }, remainingTime)

        return () => clearTimeout(timer)
      } else {
        // If 2+ seconds have already elapsed, hide immediately
        setShowLoader(false)
        loadingStartTime.current = null
      }
    }
  }, [isLoading, isFetching])

  if (error) {
    console.error('Blog query error:', error)
    return <div className='text-red-600'>Error loading blogs</div>
  }

  return (
    <div className='relative min-h-[600px]'>
      <div className='mx-auto max-w-7xl px-6 py-12'>
        <h2 className='mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Latest Articles
        </h2>

        {/* Content area with relative positioning for scoped loader */}
        <div className='relative mb-12 h-[500px]'>
          {/* Enhanced Scoped Loader - perfectly centered horizontally and vertically */}
          {showLoader && (
            <div
              className={`${
                styles.aaa
              } absolute inset-0 z-10 min-h-[500px] rounded-xl bg-white/85 backdrop-blur-md transition-all duration-300 dark:bg-gray-900/85`}
            >
              <div
                className={`${
                  styles.bbb
                } -translate-y-1/2' absolute left-1/2 top-1/2 -translate-x-1/2`}
              >
                <div className='flex flex-col items-center justify-center gap-4 text-center'>
                  <ClipLoader size={60} color='#2563eb' />
                  <p className='whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-400'>
                    Loading articles...
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className='grid min-h-[500px] gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {!showLoader && (blogs?.data?.length ?? 0) > 0 ? (
              <BlogSectionComponent blogs={blogs || []} />
            ) : !showLoader && (blogs?.data?.length ?? 0) === 0 ? (
              <div className='col-span-full flex items-center justify-center'>
                <div className='text-center'>
                  <div className='mb-4 text-6xl'>📝</div>
                  <p className='text-xl font-medium text-gray-500 dark:text-gray-400'>
                    No articles available
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Enhanced Pagination controls - perfectly centered */}
        {(blogs?.data?.length ?? 0) > 0 && (
          <div className='flex flex-col items-center gap-6'>
            {/* Main Pagination Row */}
            <div className='flex items-center justify-center gap-6'>
              {/* Previous Button */}
              <button
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                disabled={showLoader || page === 1}
                className='group flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 text-gray-700 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:border-gray-200 disabled:hover:bg-white disabled:hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 dark:disabled:hover:bg-gray-800'
              >
                <svg
                  className='h-5 w-5 transition-transform group-hover:-translate-x-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
                <span className='font-semibold'>Previous</span>
              </button>

              {/* Page Indicator */}
              <div className='flex items-center gap-3 rounded-xl border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 shadow-md dark:border-blue-800 dark:from-blue-900/20 dark:to-indigo-900/20'>
                <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>
                  Page
                </span>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md'>
                  <span className='text-sm font-bold text-white'>{page}</span>
                </div>
                <span className='text-sm text-gray-600 dark:text-gray-400'>
                  of{' '}
                  <span className='font-semibold text-gray-900 dark:text-gray-100'>
                    {Math.ceil(
                      (blogs?.pagination?.total ?? 0) /
                        (blogs?.pagination?.limit ?? 1),
                    )}
                  </span>
                </span>
              </div>

              {/* Next Button */}
              <button
                onClick={() => setPage((prev) => prev + 1)}
                disabled={
                  showLoader ||
                  page * (blogs?.pagination?.limit ?? 1) >=
                    (blogs?.pagination?.total ?? 0)
                }
                className='group flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 text-gray-700 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:border-gray-200 disabled:hover:bg-white disabled:hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 dark:disabled:hover:bg-gray-800'
              >
                <span className='font-semibold'>Next</span>
                <svg
                  className='h-5 w-5 transition-transform group-hover:translate-x-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
            </div>

            {/* Results Info */}
            <div className='rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-center dark:border-gray-700 dark:bg-gray-800/50'>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Showing{' '}
                <span className='font-semibold text-gray-900 dark:text-gray-100'>
                  {(page - 1) * (blogs?.pagination?.limit ?? 1) + 1}
                </span>{' '}
                -{' '}
                <span className='font-semibold text-gray-900 dark:text-gray-100'>
                  {Math.min(
                    page * (blogs?.pagination?.limit ?? 1),
                    blogs?.pagination?.total ?? 0,
                  )}
                </span>{' '}
                of{' '}
                <span className='font-semibold text-blue-600 dark:text-blue-400'>
                  {blogs?.pagination?.total ?? 0}
                </span>{' '}
                articles
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Wrapper component with QueryClientProvider
const BlogLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogContent />
    </QueryClientProvider>
  )
}

export default BlogLayout