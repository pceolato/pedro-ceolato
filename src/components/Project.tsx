/* eslint-disable react/no-unescaped-entities */
import { ReactNode } from 'react'

interface ProjectProps {
  title: string
  description: string
  image: ReactNode
  href: string
}

export function Project({ title, description, image, href }: ProjectProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-24 w-full">
      <div className="flex flex-col gap-3 max-w-[433px]">
        <h1 className="text-teal-50 text-xl md:text-2xl lg:text-3xl font-bold">
          {title}
        </h1>
        <p className="text-gray-400 text-sm md:text-base">{description}</p>
        <a
          href={href}
          className="text-teal-500 font-semibold hover:text-teal-300 text-sm md:text-base"
        >
          View in Github
        </a>
      </div>
      <div className="rounded-md w-[321px] h-[200px] md:w-[475px] md:h-[296px] border border-gray-400 hover:border-teal-500 delay-100 hover:opacity-30 cursor-pointer">
        {image}
      </div>
    </div>
  )
}
