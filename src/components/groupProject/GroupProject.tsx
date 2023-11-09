import { Link } from 'react-router-dom'
import { ProjectItem, ProjectProps } from './ProjectItem'

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFlip,
  Mousewheel,
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './styles/swiper.css'

interface GroupProjectProps {
  type: string
  title: string
  description: string
  projects: ProjectProps[]
}

export function GroupProject({
  type,
  title,
  description,
  projects,
}: GroupProjectProps) {
  return (
    <div className="flex items-center justify-between w-full mb-24">
      <div className="flex flex-col gap-4 max-w-xs">
        <h3 className="font-light text-3xl text-title">{title}</h3>
        <p className="font-light text-gray-400 text-lg">{description}</p>
      </div>
      <div className="max-w-md">
        <Swiper
          effect="flip"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFlip,
            Mousewheel,
          ]}
          spaceBetween={50}
          loop={true}
          slidesPerView={1}
          mousewheel={true}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={`${project.title}-${i}`}>
              <ProjectItem
                title={project.title}
                description={project.description}
                hrefDeploy={project.hrefDeploy}
                hrefRepository={project.hrefRepository}
                technologies={project.technologies}
                image={project.image}
                typeProject={project.typeProject}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-end mt-6">
          <Link className="text-title font-semibold" to={type}>
            View All
          </Link>
        </div>
      </div>
    </div>
  )
}
