import { Project } from '../components/Project'
import desktop from '../assets/Desktop-2.svg'
import nbaImage from '../assets/nba-players.svg'

export function Projects() {
  return (
    <div className="w-full max-w-[950px] mx-auto px-8 flex flex-col items-center">
      <Project
        title="Pedro Ceolato"
        description="—I'm a software engineer passionate about transforming people`s lives through technology."
        href="/"
        image={
          <img
            src={desktop}
            alt=""
            className="w-full h-full object-cover rounded"
          />
        }
      />
      <Project
        title="NBA Players"
        description="Web application to fetch information about all NBA players in this project."
        href="/"
        image={
          <img
            src={nbaImage}
            alt=""
            className="w-full h-full object-cover rounded"
          />
        }
      />
    </div>
  )
}
