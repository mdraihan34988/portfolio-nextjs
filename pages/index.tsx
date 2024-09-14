import { Suspense } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Subscribe from '../components/Subscribe';
import VideoCard from '../components/VideoCard';
import { FiDownload } from "react-icons/fi";
import SkillSection from 'components/SkillSection';

export default function Home() {
  const skills = [ 
    {
      name: "React.js",
      level: 80,
      pinned: true,
    },
    {
      name: "Next.js",
      level: 80,
      pinned: true,
    }, {
      name: "Javascript",
      level: 80,
      pinned: true,
    },
    {
      name: "Node.js",
      level: 50,
      pinned: false,
    },
    {
      name: "Laravel",
      level: 50,
      pinned: true,
    },
    {
      name: "MySQL",
      level: 85,
      pinned: true,
    },
    {
      name: "Git",
      level: 95,
      pinned: true,
    },{
      name: "HTML",
      level: 100,
      pinned: true,
    },
    {
      name: "CSS",
      level: 95,
      pinned: true,
    },
 
  // {
  //   name: "SASS",
  //   level: 80,
  //   pinned: false,
  // },
  {
    name: "Bootstrap",
    level: 90,
    pinned: true,
  },
  {
    name: "Tailwind CSS",
    level: 100,
    pinned: true,
  },
  {
    name: "Spring Boot",
    level: 100,
    pinned: true,
  },
  // {
  //   name: "C Programming",
  //   level: 80,
  //   pinned: false,
  // },
  // {
  //   name: "C++",
  //   level: 60,
  //   pinned: false,
  // },
  // {
  //   name: "Python",
  //   level: 85,
  //   pinned: true,
  // },

  // {
  //   name: "Firebase",
  //   level: 60,
  //   pinned: true,
  // },
  // {
  //   name: "Data Structure",
  //   level: 60,
  //   pinned: false,
  // },
  // {
  //   name: "MS Office",
  //   level: 70,
  //   pinned: false,
  // },
  // {
  //   name: "Figma",
  //   level: 70,
  //   pinned: false,
  // },
]
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-4">
          <div className="flex w-[100%] sm:w-[100%] m-4 relative justify-center">
                <Image
                  alt="Md Raihanul Islam"
                  height={176}
                  width={176}
                  src="/avatar.jpg"
                  sizes="30vw"
                  priority
                  className="rounded-full filter"
                />
            </div>
          <div className="flex flex-col-reverse sm:flex-row items-start pt-4">
            <div className="flex flex-col" style={{textAlign: "center"}}>
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white" >
                Md. Raihanul Islam
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Associate Software Engineer at{' '}
                <span className="font-semibold">Line Reflection LTD</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-justify	">
              I am a CSE graduate from American International University-Bangladesh (AIUB). Now I am working as an Associate Software Engineer in Linereflection. Here, I am working on reactJs and nodeJs stack and have the experience to work with Asp.net mvc (c#) technology, mysql & mssql database.
              </p>
              <div className="flex gap-6 flex-col md:flex-row">
              <Link href={`/Raihanul_Islam_Resume.pdf`} >
              <a
                target="_blank"
                className=
                  'transform hover:scale-[1.01] transition-all rounded-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]'
              >
                <div className="flex bg-white dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg p-2 justify-center items-center">
                <FiDownload /> <p className="px-1">Download Resume</p>
                  {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 ml-1"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                      />
                    </svg> */}
                </div>
              </a>
            </Link>
            <Link href={`/contact`}>
              <a
                className=
                  'transform hover:scale-[1.01] transition-all rounded-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'
              >
                <div className="flex bg-white hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-gray-900 rounded-lg p-2 justify-center">
                  Hire Me <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 ml-1"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                      />
                    </svg>
                </div>
              </a>
            </Link>
            </div>
            </div>
          </div>

          {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Posts
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
              slug="style-guides-component-libraries-design-systems"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="Rust Is The Future of JavaScript Infrastructure"
              slug="rust"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <BlogPostCard
              title="Past, Present, and Future of React State Management"
              slug="react-state-management"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
          </div>
          <Link href="/blog">
            <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              Read all posts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
          </Link>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Learn React & Next.js
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Build and deploy a modern SaaS application using the most popular
            open-source software. This course is 12 hours long and is completely
            live streamed.
          </p>
          <VideoCard
            index="01"
            href="https://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
            length="1:02:45"
            title="Introduction to React 2025"
          />
          <VideoCard
            index="02"
            href="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
            length="54:22"
            title="Firestore, Chakra UI, Absolute Imports"
          />
          <VideoCard
            index="03"
            href="https://www.youtube.com/watch?v=3g6-v3_BNbM&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=4"
            length="1:08:30"
            title="Designing & Building the Dashboard"
          />
          <VideoCard
            index="04"
            href="https://www.youtube.com/watch?v=u8iv_yhSRI8&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=5"
            length="1:13:45"
            title="Firebase Admin with Next.js + SWR"
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/playlist?list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1"
            className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            Watch all videos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
          <span className="h-16" />
          <Subscribe /> */}
           <div className="pt-4 text-black">
              <SkillSection skills={skills} />
              {/* <BlogsSection blogs={blogs} />
              <Contact /> */}
            </div>
        </div>
       
      </Container>
    </Suspense>
  );
}
