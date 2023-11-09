import portfolioImage from '../assets/portfolio.svg'
import mentorGoImage from '../assets/mentorGo.svg'
import nbaImage from '../assets/nba-players.svg'

interface ProjectType {
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

interface groupProjectType {
  type: 'personal' | 'cothefato'
  title: string
  description: string
  projects: ProjectType[]
}

export const allProjects: groupProjectType[] = [
  {
    type: 'cothefato',
    title: 'Cothefato Studio',
    description:
      'This section showcases projects from Cothefato Studio, where I serve as the CEO and Software Engineer. Each project arises from a need or an innovative idea, showcasing our ability to turn challenges into creative and functional solutions.',
    projects: [
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
        typeProject: 'cothefato',
      },
    ],
  },
  {
    type: 'personal',
    title: 'Personal',
    description:
      'In this section, I share a selection of projects that have arisen from my passion and personal interest. Each of them represents an opportunity to explore my creativity, technical skills, and tackle challenges in innovative ways. These projects are an extension of myself and reflect a commitment to ongoing learning and the pursuit of excellence.',
    projects: [
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
        typeProject: 'personal',
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
        typeProject: 'personal',
      },
    ],
  },
]
