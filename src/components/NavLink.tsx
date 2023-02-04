import { ReactNode } from 'react'
import { NavLink as Nav, useLocation } from 'react-router-dom'

interface NavLinkProps {
  children: ReactNode
  href: string
}
export function NavLink({ children, href }: NavLinkProps) {
  const { pathname } = useLocation()

  const isCurrentPath = pathname === href
  return (
    <Nav
      to={href}
      className={`text-2xl text-teal-50 ${isCurrentPath && 'text-teal-500'}`}
    >
      {children}
    </Nav>
  )
}
