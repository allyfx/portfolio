import { BlogPosts } from '@/components/BlogPosts';
import { getSortedPostsData } from '@/utils/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alícia Foureaux - Blog',
  description: 'Sharing stories, learnings and experiences that I gained throughout my career.',
}

export default function Blog() {
  const allPostsData = getSortedPostsData()

  return <BlogPosts posts={allPostsData} />
}
