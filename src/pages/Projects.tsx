import { GroupProject } from '../components/groupProject/GroupProject'
import { allProjects } from '../utils/allProjects'

export function Projects() {
  return (
    <div className="w-full max-w-[950px] mx-auto px-8 flex flex-col items-center mb-24">
      {allProjects.map((project, i) => (
        <GroupProject
          key={`${project.type}-${i}`}
          type={project.type}
          title={project.title}
          description={project.description}
          isLastProject={allProjects.length - 1 === i}
          projects={project.projects}
        />
      ))}
    </div>
  )
}
