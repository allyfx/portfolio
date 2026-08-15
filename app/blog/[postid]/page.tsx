import { PostPage } from "@/components/PostPage"
import { getPostData } from "@/utils/posts";

export default async function Post({ params }: { params: Promise<{postid:string}> }) {
  const postData = await getPostData((await params).postid);

  return <PostPage postData={postData} />
}