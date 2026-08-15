"use client"

import { useState, useEffect, useMemo } from "react"
import { PostMetadata } from "@/utils/posts"
import { typewriteText } from "@/utils/typewrite-text";
import { motion } from "motion/react";

interface Props {
  posts: PostMetadata[]
}

export function BlogPosts({ posts }: Props) {
  const [finishedTitleAnimation, setFinishedTitleAnimation] = useState(false);
  const [search, setSearch] = useState('');

  const filteredPosts = useMemo(() => {
    if (!search) {
      return posts
    }

    return posts.filter(post => post.title.includes(search) || post.category.includes(search) || post.date.includes(search) || post.short.includes(search) || post.id.includes(search))
  }, [search]);
  
  useEffect(() => {
    typewriteText(["title", "subtitle"], setFinishedTitleAnimation)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center font-mono">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-left py-16 px-6 md:py-32 md:px-16 sm:items-start">
        <h1 id="title" className="text-xl md:text-4xl font-bold hidden">Alícia Foureaux - Blog</h1>
        <p id="subtitle" className="text-base md:text-xl break-normal hidden">Tech Lead | Senior Software Engineer</p>

        {finishedTitleAnimation && (
          <main>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-lg md:text-2xl break-normal mt-3">
              Sharing stories, learnings and experiences that I gained throughout my career.
            </motion.p>

            <input
              type="text"
              placeholder="What do you wanna read about?"
              className="border-2 border-amber-50 py-2 px-1 pl-4 rounded-md mt-8 w-full"
              onChange={(e) => setSearch(e.currentTarget.value)}
              value={search}
            />

            <motion.section
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
              className="mt-8">
              <h1 className="text-xl md:text-2xl font-bold">All Posts</h1>
              <ul className="text-base md:text-xl ml-12 space-y-6">
                {filteredPosts.map(post => ( 
                  <section
                    key={post.id}
                    className="mt-2">
                      <li className="space-x-3 flex flex-row gap-3 items-start">
                        L
                        <div className="hover:border-amber-50 border-2 border-transparent rounded-md p-2 cursor-pointer">
                          <strong className="underline block">{post.title}</strong>
                          <p>{post.category} - {post.date}</p>

                          <div className="mt-2">
                            {post.short}
                          </div>
                        </div>
                      </li>
                  </section>
                ))}

                <div className="mt-6">
                  {filteredPosts.length <= 0 && !!search && posts.length > 0 && (
                    <p>Not Found Error x_x</p>
                  )}

                  {!!search && posts.length <= 0 && (
                    <p>Lol I said there were no posts, what are you searching for? XD</p>
                  )}

                  {posts.length <= 0 && !search && (
                    <p>There are no posts to show.</p>
                  )}
                </div>
              </ul>
            </motion.section>
          </main>
        )}
      </main>
    </div>
  )
}