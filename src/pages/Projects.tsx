import { Project, ProjectProps } from '../components/project/Project'
import portfolioImage from '../assets/portfolio.svg'
import mentorGoImage from '../assets/mentorGo.svg'
import nbaImage from '../assets/nba-players.svg'

export function Projects() {
  const allProjects: ProjectProps[] = [
    {
      title: 'MentorGo',
      description:
        "With MentorGo, mentors and teachers can efficiently manage each student's individual development. The platform offers personalized resources for each learning stage, allowing mentors to create challenges, write articles, register courses and create rooms. If you already provide some kind of mentoring or private lessons, increase the efficiency of your teachings and take your students to the next level with MentorGo.",
      hrefDeploy: 'https://mentor-go.vercel.app/',
      hrefRepository: 'https://github.com/CodeTheFato/MentorGo',
      image: {
        src: mentorGoImage,
        nameProject: 'mentor-go',
      },
      technologies: ['nextjs', 'chakra-ui', 'prisma', 'mongoDB'],
    },
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
      technologies: ['reactjs', 'tailwindcss', 'radix-ui'],
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
