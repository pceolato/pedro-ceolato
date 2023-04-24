import { Code } from 'react-feather'
import { NavLink } from 'react-router-dom'
import { teal } from 'tailwindcss/colors'

export function Logo() {
  return (
    <NavLink to="/" className="flex items-center gap-2">
      <span className="text-title text-xl">Pedro Ceolato</span>
      <Code color={teal[500]} size={24} />
    </NavLink>
  )
}
