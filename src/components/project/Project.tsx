/* eslint-disable react/no-unescaped-entities */
import { Tech } from './Tech'

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
}

export function Project({
  title,
  description,
  image,
  hrefRepository,
  hrefDeploy,
  technologies,
}: ProjectProps) {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start gap-3 md:gap-6 mb-24 w-full">
      <div className="flex flex-col gap-2 max-w-[433px]">
        <h1 className="text-teal-50 text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-300">
          {title}
        </h1>
        <p className="text-gray-400 text-sm md:text-base transition-all duration-300">
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
          className="text-teal-500 font-semibold hover:text-teal-300 text-sm md:text-base"
          rel="noreferrer"
        >
          View in Github
        </a>
      </div>
      <div className="rounded-md w-full h-[200px] md:w-[475px] md:h-[296px] max-w-[433px] border border-gray-400 hover:border-teal-500 duration-500 hover:opacity-30 cursor-pointer">
        {hrefDeploy !== '/' ? (
          <a href={hrefDeploy} target="_blank" rel="noreferrer">
            <img
              src={image.src}
              alt={`Imagem do projeto ${image.nameProject}`}
              className="w-full h-full object-cover rounded"
            />
          </a>
        ) : (
          <a href={hrefDeploy}>
            <img
              src={image.src}
              alt={`Imagem do projeto ${image.nameProject}`}
              className="w-full h-full object-cover rounded"
            />
          </a>
        )}
      </div>
    </div>
  )
}
