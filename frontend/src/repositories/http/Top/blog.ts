const blogPageDomain = process.env.NEXT_PUBLIC_BLOG_PAGE
import { BlogRepo } from '@/repositories/interface/Top/BlogRepo'
import { DEFAULT_IMAGE } from '@/utils/const'

export class HttpBlogRepo implements BlogRepo {
  async getBlogs(): Promise<any> {
    try {
      const res = await fetch(
        `${blogPageDomain}articles`,
        {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
          },
        },
      )

      if (!res.ok) {
        console.error('Failed to get posts from blog.')
        return null
      }

      let posts = await res.json()

      return posts.data
    } catch (e) {
      return []
    }
  }
  async getBlogImage(url: string): Promise<string> {
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
        },
      })

      if (!res.ok) {
        return DEFAULT_IMAGE
      }
      const data = await res.json()

      return data.source_url
    } catch (e) {
      return DEFAULT_IMAGE
    }
  }
}
