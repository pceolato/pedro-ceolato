import { Logo } from './Logo'
import { NavLink } from './NavLink'

export function NavDesktop() {
  return (
    <div className="flex justify-between w-[1072px] mx-auto p-8 pb-36">
      <Logo />
      <nav className="flex items-center gap-12">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projects</NavLink>
      </nav>
    </div>
  )
}
