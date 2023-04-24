import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { ToggleIcon } from '../ToggleIcon'

export function NavDesktop() {
  return (
    <div className="flex justify-between max-w-[1072px] mx-auto p-8 pb-36">
      <Logo />
      <nav className="flex items-center gap-12">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <ToggleIcon />
      </nav>
    </div>
  )
}
