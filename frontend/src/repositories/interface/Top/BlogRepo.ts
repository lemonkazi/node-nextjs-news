/* eslint-disable no-unused-vars */
import { Blog } from '@/models/Top/blog'

export interface BlogRepo {
  getBlogs(): Promise<any>
  getBlogImage(url: string): Promise<string>
}
