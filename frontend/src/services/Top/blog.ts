import { HttpBlogRepo } from '@/repositories/http/Top/blog'
import { BlogRepo } from '@/repositories/interface/Top/BlogRepo'

// You can switch data source by setting USE_MOCK environment variable in .env.local file
const blogRepo: BlogRepo = new HttpBlogRepo()

export class BlogService {
  getBlogs = async (): Promise<any[]> => {
    return await blogRepo.getBlogs()
  }
  getBlogImage = async (url: string): Promise<string> => {
    return await blogRepo.getBlogImage(url)
  }
}
