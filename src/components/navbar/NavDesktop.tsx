import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { ToggleIcon } from '../ToggleIcon'
import { useLocation } from 'react-router-dom'

export function NavDesktop() {
  const { pathname } = useLocation()

  return (
    <div className="flex justify-between max-w-[1072px] mx-auto p-8 pb-36">
      <Logo />
      <nav className="flex items-center gap-12">
        <NavLink href="/" isActive={pathname === '/'}>
          Home
        </NavLink>
        <NavLink href="/projects" isActive={pathname.startsWith('/projects')}>
          Projects
        </NavLink>
        <ToggleIcon />
      </nav>
    </div>
  )
}
