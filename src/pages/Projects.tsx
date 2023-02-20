import { Project, ProjectProps } from '../components/project/Project'
import portfolioImage from '../assets/portfolio.svg'
import nbaImage from '../assets/nba-players.svg'

export function Projects() {
  const allProjects: ProjectProps[] = [
    {
      title: 'NBA Players',
      description:
        'Web application to fetch information about all NBA players.',
      hrefRepository: 'https://github.com/pceolato/nba-players',
      hrefDeploy: 'https://nba-players.vercel.app',
      technologies: ['nextjs', 'tailwindcss'],
      image: {
        src: nbaImage,
        nameProject: 'NBA-Players',
      },
    },
    {
      title: 'Pedro Ceolato',
      description:
        'Project developed to centralize some projects and collaborations and improve my skills.',
      hrefRepository: 'https://github.com/pceolato/pedro-ceolato',
      hrefDeploy: '/',
      technologies: ['reactjs', 'tailwindcss'],
      image: {
        src: portfolioImage,
        nameProject: 'pedro-ceolato',
      },
    },
  ]

  return (
    <div className="w-full max-w-[950px] mx-auto px-8 flex flex-col items-center">
      {allProjects.map((project, i) => (
        <Project
          key={`${project.title}-${i}`}
          title={project.title}
          description={project.description}
          hrefDeploy={project.hrefDeploy}
          hrefRepository={project.hrefRepository}
          technologies={project.technologies}
          image={project.image}
        />
      ))}
    </div>
  )
}
