"use client";
import { useEffect, useState } from "react";
import { typewriteText } from "@/utils/typewrite-text";
import { motion } from "motion/react";
import { typewriteContent } from "@/utils/typewrite-content";

const SKILLS = ["Leadership", "React", "React Native", "TypeScript", "Expo", "NextJS"]

export default function Home() {
  const [finishedTitleAnimation, setFinishedTitleAnimation] = useState(false);

  useEffect(() => {
    typewriteText(["title", "subtitle"], setFinishedTitleAnimation)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-mono dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 id="title" className="text-4xl font-bold hidden">Alícia Foureaux</h1>
        <p id="subtitle" className="text-2xl hidden">Senior Software Engineer Contractor</p>

        {finishedTitleAnimation && (
          <main>
            <div className="flex flex-row gap-2 items-end">
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onAnimationComplete={() => typewriteContent("skills", SKILLS)}
                className="text-2xl mt-4">
                  Skills:
              </motion.p>
              <p id="skills" className="font-bold w-fit text-2xl"></p>
            </div>

            <motion.section
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
              className="mt-8">
                <h1 className="text-xl font-bold">Table of contents:</h1>
                <ul className="text-xl ml-12 mt-2 space-y-2">
                  <li>L  <a href="#whoAmI" className="underline">Who am I?</a></li>
                  <li>L <a href="#workExperience" className="underline">Work Experience</a></li>
                  <li>L <a href="#projects" className="underline">Personal Projects</a></li>
                  <li>L <a href="#socials" className="underline">Where to find me</a></li>
                </ul>
            </motion.section>

            {/* Who am I? */}
            <motion.section
              id="whoAmI"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
              className="mt-8">
                <h1 className="text-2xl font-bold">Who am I?</h1>
                <ul className="text-xl ml-12 mt-2 space-y-2">
                  <li>L Over 5 years of experience building software</li>
                  <li>L Thrive at solving problems, no matter the tools</li>
                  <li>L Leadership focused on leading, not bossing</li>
                  <li>L Known for having way too many hobbies</li>
                </ul>
            </motion.section>

            {/* Work Experience */}
            <motion.section
              id="workExperience"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6, ease: "easeInOut" }}
              className="mt-8">
                <h1 className="text-2xl font-bold">Work Experience</h1>
                <ul className="text-xl ml-12 mt-2 space-y-8">
                  <li className="space-x-3 flex flex-row gap-3 items-start">
                    L
                    <div>
                      <strong>Team Lead at ## </strong>
                      <small>(Dec/25 - Present)</small>

                      <div className="mt-2">
                        Leading a team of 12–30 engineers to build amazing projects, my main responsibility is to provide technical guidance, report on project status, organize the work to be done, and code alongside the engineers.
                      </div>
                    </div>
                  </li>

                  <li className="space-x-3 flex flex-row gap-3 items-start">
                    L

                    <div>
                      <strong>Senior Software Engineer at Togetherhood </strong>
                      <small>(Sept/23 - Dec/25)</small>

                      <div className="mt-2">
                        Building dashboard tools using React and TypeScript, my main responsibility was building the customer-facing frontend dashboard and the internal admin dashboard. I also helped with the backend from time to time.
                      </div>
                    </div>
                  </li>
                  
                  <li className="space-x-3 flex flex-row gap-3 items-start">
                    L

                    <div>
                      <strong>Senior Mobile Engineer at SalesAssist </strong>
                      <small>(Aug/24 - Aug/25)</small>

                      <div className="mt-2">
                        Building the customer-facing mobile application, my main responsibility was migrating from the previous codebase to a newer, more modern stack using Expo and TypeScript. I also fixed bugs in the legacy codebase and helped onboard new customers.
                      </div>
                    </div>
                  </li>
                  
                  <li className="space-x-3 flex flex-row gap-3 items-start">
                    L

                    <div>
                      <strong>FrontEnd Developer at Grupo Plin </strong>
                      <small>(Nov/20 - Nov/23)</small>

                      <div className="mt-2">
                        Building the customer-facing mobile application, my main responsibility was developing new features using React Native and TypeScript, releasing the app to the app stores, and making technical decisions about the app’s future. I also contributed to the backend and frontend and took full ownership of the mobile app.
                      </div>
                    </div>
                  </li>
                </ul>
            </motion.section>

            {/* Personal Projects */}
            <motion.section
              id="projects"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
              className="mt-8">
                <h1 className="text-2xl font-bold">Personal Projects</h1>
                <ul className="text-xl ml-12 mt-2 space-y-8">
                  <li className="space-x-3 flex flex-row gap-3 items-start">
                    L 
                    <div>
                      <a href="https://paidapp.dev/" target="_blank" rel="noopener noreferrer" className="underline font-bold">Paid - Expenses Tracker</a>
                      <div className="mt-2">
                        Mobile application built using Expo, TypeScript and Supabase. I always forget to pay my bills, so I made an app to remind me.
                      </div>
                    </div>
                  </li>

                  <li className="space-x-3 flex flex-row gap-3 items-start">
                    L 
                    <div>
                      <a href="https://you-already-did.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline font-bold">You already did!</a>
                      <div className="mt-2">
                        A website for you to remember the things you've already done and how amazing you are.
                      </div>
                    </div>
                  </li>
                </ul>
            </motion.section>

            {/* Where to find me */}
            <motion.section
              id="socials"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
              className="mt-8">
                <h1 className="text-2xl font-bold">Where to find me</h1>
                <p>Need to build web apps, mobile apps or have an interesting opportunity? Contact me:</p>
                <ul className="text-xl ml-12 mt-2 space-y-2">
                  <li>L <a href="https://www.linkedin.com/in/aliciafoureaux/" target="_blank" className="underline">LinkedIn</a></li>
                  <li>L <a href="https://github.com/allyfx" target="_blank" className="underline">GitHub</a></li>
                  <li>L Email: ally@foureauxcode.com</li>
                </ul>
            </motion.section>
          </main>
        )}
      </main>
    </div>
  );
}
