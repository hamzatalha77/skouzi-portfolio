import Image from '@/app/utils/Image'
import Link from 'next/link'
import React from 'react'

const Work = () => {
  return (
    <section className="py-6 max-w-[1200px] mx-auto" id="work">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-gray-300">
              My <span>Projects</span>
            </h2>
            <p className="text-gray-500">
              These are my latest projects for my different clients.
            </p>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <Link
            href="/"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image
              path="skouzi/projects (1).png"
              alt="project1"
              width={0}
              height={0}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to to-transparent opacity-50"></div>
          </Link>
          <Link
            href="/"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <Image
              path="skouzi/projects (2).png"
              alt="project1"
              width={0}
              height={0}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to to-transparent opacity-50"></div>
          </Link>
          <Link
            href="/"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <Image
              path="skouzi/projects (3).png"
              alt="project1"
              width={0}
              height={0}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to to-transparent opacity-50"></div>
          </Link>
          <Link
            href="/"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image
              path="skouzi/projects (4).png"
              alt="project1"
              width={0}
              height={0}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to to-transparent opacity-50"></div>
          </Link>
          <Link
            href="/"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image
              path="skouzi/projects (5).png"
              alt="project1"
              width={0}
              height={0}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to to-transparent opacity-50"></div>
          </Link>
          <Link
            href="/"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <Image
              path="skouzi/projects (6).png"
              alt="project1"
              width={0}
              height={0}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to to-transparent opacity-50"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Work
