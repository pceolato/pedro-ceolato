import { Project } from '../components/Project'
import portfolioImage from '../assets/portfolio.svg'
import nbaImage from '../assets/nba-players.svg'

export function Projects() {
  return (
    <div className="w-full max-w-[950px] mx-auto px-8 flex flex-col items-center">
      <Project
        title="NBA Players"
        description="Web application to fetch information about all NBA players in this project."
        hrefRepository="https://github.com/pceolato/nba-players"
        hrefDeploy="https://nba-players.vercel.app"
        technologies={['nextjs', 'tailwindcss']}
        image={
          <img
            src={nbaImage}
            alt=""
            className="w-full h-full object-cover rounded"
          />
        }
      />
      <Project
        title="Pedro Ceolato"
        description="Project developed to centralize some projects and collaborations and improve my skills."
        hrefRepository="https://github.com/pceolato/pedro-ceolato"
        hrefDeploy="/"
        technologies={['reactjs', 'tailwindcss']}
        image={
          <img
            src={portfolioImage}
            alt=""
            className="w-full h-full object-cover rounded"
          />
        }
      />
    </div>
  )
}
