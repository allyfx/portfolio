import { BlogPosts } from '@/components/BlogPosts';
import { getSortedPostsData } from '@/utils/posts';

export default function Blog() {
  const allPostsData = getSortedPostsData()

  return <BlogPosts posts={allPostsData} />
}
