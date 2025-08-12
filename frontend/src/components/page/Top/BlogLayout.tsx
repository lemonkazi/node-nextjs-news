'use client'

import { blogTest } from '@/utils/blog-const'
import { BlogService } from '@/services/Top/blog'
import { DEFAULT_IMAGE } from '@/utils/const'

// Packages
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
      image: image
    }
    processedPosts.push(processedPost)
  }

  return processedPosts
}

const fetchBlogs = async () => {
  try {
    // const posts = isLocalUrl.includes('localhost')
    //   ? blogTest
    //   : await blogService.getBlogs()
    
    const response = await blogService.getBlogs()
    const posts = response.data
    console.log("Extracted posts data:", posts)

    if (!posts || posts.length === 0) {
      return []
    }

    // Add loading state initially
    const appendPosts = posts.map((item: any) => ({
      ...item,
      isLoading: true,
    }))

    // Process images
    //const processedPosts = await processPostsWithImages(appendPosts)
    return appendPosts
    
  } catch (error) {
    console.error('Error fetching blogs:', error)
    throw error
  }
}

// Main Blog Component
const BlogContent = () => {
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['topBlogs'],
    queryFn: fetchBlogs,
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  if (error) {
    console.error('Blog query error:', error)
    return <div>Error loading blogs</div>
  }
  console.log("============");
  console.log(blogs);

  return (
    <div id='blog'>
      {/* <Banner /> */}
      <div className='text-dark font-yugothic mx-auto my-16 max-h-[800px] max-w-[1080px] bg-transparent px-0 py-16 max-[767px]:my-8 max-[767px]:py-8 lg:my-2.5 lg:py-20 dark:text-white'>
        <BlogSectionComponent blogs={blogs || []} />
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
