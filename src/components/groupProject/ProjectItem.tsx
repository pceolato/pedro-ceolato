/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom'
import { Tech } from '../project/Tech'

export interface ProjectProps {
  title: string
  description: string
  image: {
    src: string
    nameProject: string
  }
  hrefRepository: string
  hrefDeploy: string
  technologies?: string[]
  typeProject: 'personal' | 'cothefato'
}

export function ProjectItem({
  title,
  description,
  image,
  hrefRepository,
  hrefDeploy,
  technologies,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col gap-2 max-w-[433px]">
        <h1 className="text-title text-xl lg:text-3xl font-bold transition-all duration-300 hover:opacity-50">
          {hrefDeploy !== '/' ? (
            <Link to={hrefDeploy} target="_blank" rel="noreferrer">
              {title}
            </Link>
          ) : (
            <Link to={hrefDeploy}>{title}</Link>
          )}
        </h1>
        <p className="text-gray-400 text-sm transition-all duration-300">
          {description}
        </p>
        <div className="flex gap-3">
          {technologies?.map((tech, i) => (
            <Tech key={`${tech}-${i}`} name={tech} />
          ))}
        </div>
        <a
          href={hrefRepository}
          target="_blank"
          className="text-teal-500 font-semibold hover:text-teal-300 "
          rel="noreferrer"
        >
          View in Github
        </a>
      </div>
      <div className="rounded-md w-full h-[200px]max-w-[433px] border border-gray-400 hover:border-teal-500 duration-500 cursor-pointer">
        <img
          src={image.src}
          alt={`Imagem do projeto ${image.nameProject}`}
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  )
}
