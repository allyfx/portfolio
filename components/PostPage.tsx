"use client"
import { PostData } from "@/utils/posts";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SubscribeSection } from "./SubscribeSection";

export function PostPage({postData}: { postData: PostData | null }) {
  const router = useRouter()
  
  function navigateToHome() {
    router.push('/blog')
  }

  if (postData === null) {
    return (
      <div className="flex min-h-screen items-center justify-center font-mono">
        <main className="flex min-h-screen w-full max-w-4xl flex-col items-left py-16 px-6 md:py-32 md:px-16 sm:items-start">
          <p id="subtitle" className="text-base md:text-xl break-normal">
            Something is wrong with this post. Refresh the page or go back to the main page.
          </p>

          <button
            className="border-2 p-2 border-amber-50 rounded-md mt-4 cursor-pointer hover:font-bold"
            onClick={navigateToHome}>
            Navigate to main page
          </button>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center font-mono">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-left py-16 px-6 md:py-32 md:px-14 sm:items-start">
        <h1 id="title" className="text-xl md:text-4xl font-bold">{postData.title}</h1>
        <p id="subtitle" className="text-base md:text-xl break-normal mt-2">
          {postData.date} - by <Link href="/" className="underline cursor-pointer">Alícia Foureaux</Link>
        </p>

        <div className="mt-8 mb-16 light:prose lg:prose-xl prose-code:font-sans prose-code:bg-gray-800 prose-code:px-2 prose-code:rounded-md space-y-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

        <footer className="border-t-2 border-amber-50 w-full pt-4">
          <p className="text-base md:text-xl">Liked the post? Let me know your thoughts:</p>

          <ul className="text-base md:text-xl ml-8 mt-2 mb-6 space-y-2">
            <li>L <a href="https://www.linkedin.com/in/aliciafoureaux/" target="_blank" className="underline">LinkedIn</a></li>
            <li>L <a href="https://github.com/allyfx" target="_blank" className="underline">GitHub</a></li>
            <li>L Email: ally@foureauxcode.com</li>
          </ul>

          <Link className="text-base md:text-xl underline hover:font-bold" href="/blog">Want to read more? Check out the <strong>blog!</strong></Link>

          <SubscribeSection />
        </footer>
      </main>
    </div>
  )
}