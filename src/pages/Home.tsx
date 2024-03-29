/* eslint-disable react/no-unescaped-entities */
import { GitHub, Linkedin } from 'react-feather'
import * as Avatar from '@radix-ui/react-avatar'

export function Home() {
  return (
    <>
      <div className="px-8 flex flex-col gap-6 items-start justify-between w-full max-w-[1072px] m-auto md:flex-row">
        <div className="max-w-screen-sm">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-8">
            <Avatar.Root className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full transition-all duration-300">
              <Avatar.Image
                className="w-full h-full object-cover rounded-full"
                src="https://github.com/pceolato.png"
                alt="foto do Pedro Ceolato"
              />
              <Avatar.Fallback
                delayMs={100}
                className="w-full h-full object-cover rounded-full bg-gray-900 text-teal-500 flex items-center justify-center text-4xl"
              >
                PC
              </Avatar.Fallback>
            </Avatar.Root>
            <h1 className="text-teal-500 font-bold text-3xl md:text-4xl lg:text-5xl transition-all duration-300">
              Hi, I'm Pedro Ceolato
            </h1>
          </div>
          <p className="text-title py-3 md:py-7 text-sm md:text-base lg:text-xl transition-all duration-300">
            I'm a software developer, this is my portfolio and here you will
            follow my projects and collaborations. I am passionate about
            technology and the power of it.
          </p>
          <span className="block text-title text-sm md:text-base lg:text-xl">
            To get in touch, email
          </span>
          <a
            href="mailto:pedroceolato2002@gmail.com?"
            className="text-teal-300 hover:text-teal-700 transition-all duration-300 text-sm md:text-base lg:text-xl"
          >
            pedroceolato2002@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pceolato"
            target="_blank"
            rel="noreferrer"
          >
            <button className="p-4 font-semibold text-sm bg-card text-teal-500 rounded-md md:hover:scale-110 ease-in-out duration-500">
              <GitHub size={24} />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-ceolato/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="p-4 font-semibold text-sm bg-card text-teal-500 rounded-md md:hover:scale-110 ease-in-out duration-500">
              <Linkedin size={24} />
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
