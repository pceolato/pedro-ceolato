import { Project } from '../components/project/Project'
import { ArrowLeft } from 'react-feather'
import { allProjects } from '../utils/allProjects'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function ProjectsByType() {
  const { typeProject } = useParams()
  const [titlePage, setTitlePage] = useState('')

  const curretGroupProject = allProjects.find(
    (project) => project.type === typeProject,
  )

  const onSetTitlePage = () => {
    switch (typeProject) {
      case 'cothefato':
        setTitlePage('Cothefato Studio')
        break
      case 'personal':
        setTitlePage('Personal')
        break
      default:
        setTitlePage('')
    }
  }

  useEffect(() => {
    onSetTitlePage()
  }, [])

  return (
    <section className="max-w-[950px] mx-auto px-8">
      <div className="mb-16">
        <Link
          className="text-title hover:opacity-70 block w-fit"
          to="/projects"
        >
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-title font-extralight text-4xl text-center">
          {titlePage}
        </h1>
      </div>
      <div className="w-full flex flex-col items-center">
        {curretGroupProject?.projects.map((project, i) => (
          <Project
            key={`${project.title}-${i}`}
            title={project.title}
            description={project.description}
            hrefDeploy={project.hrefDeploy}
            hrefRepository={project.hrefRepository}
            technologies={project.technologies}
            image={project.image}
            typeProject={project.typeProject}
          />
        ))}
      </div>
    </section>
  )
}
