import { allProjects } from '../utils/allProjects'
import * as Tabs from '@radix-ui/react-tabs'
import '../styles/projects.css'
import { Project } from '../components/project/Project'

export function Projects() {
  return (
    <div className="w-full max-w-[950px] mx-auto px-8 flex flex-col mb-24">
      <Tabs.Root defaultValue="personal" className="text-title">
        <Tabs.List className="flex items-center gap-6 font-extralight text-xl mb-20">
          <Tabs.Trigger
            className="hover:translate-y-1 transition-all tabsTrigger"
            value="personal"
          >
            Personal
          </Tabs.Trigger>
          <Tabs.Trigger
            className="hover:translate-y-1 transition-all tabsTrigger"
            value="cothefato"
          >
            Cothefato Studio
          </Tabs.Trigger>
        </Tabs.List>
        {allProjects.map((project, index) => (
          <Tabs.Content
            key={project.type}
            value={project.type}
            className="flex flex-col gap-16"
          >
            <p className="max-w-4xl text-center text-gray-400">
              {project.description}
            </p>

            <div className="w-full">
              {project.projects.map((project, i) => (
                <Project
                  key={`${project.title}-${i}`}
                  title={project.title}
                  description={project.description}
                  hrefDeploy={project.hrefDeploy}
                  hrefRepository={project.hrefRepository}
                  technologies={project.technologies}
                  images={project.images}
                  typeProject={project.typeProject}
                />
              ))}
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  )
}
