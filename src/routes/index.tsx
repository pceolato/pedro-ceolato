import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Projects } from '../pages/Projects'
import { ProjectsByType } from '../pages/ProjectsByType'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects">
          <Route index element={<Projects />} />
          <Route path="/projects/:typeProject" element={<ProjectsByType />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
