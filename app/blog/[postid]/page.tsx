import { PostPage } from "@/components/PostPage"
import type { Metadata, ResolvingMetadata } from 'next'
import { getPostData } from "@/utils/posts";

interface Props {
  params: Promise<{postid:string}>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostData((await params).postid)

  if (!post) {
    return {
      title: "Alicia Foureaux | Tech Lead",
      description: "Tech Lead and Senior Software Engineer especialized in solving problems.",
    }
  }
 
  return {
    title: post.title,
    description: post.short,
    authors: [{name: "Alícia Foureaux", url: "https://allyfx.dev"}]
  }
}

export default async function Post({ params }: Props) {
  const postData = await getPostData((await params).postid);

  return <PostPage postData={postData} />
}