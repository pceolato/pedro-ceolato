import clsx from 'clsx'
import { ReactNode } from 'react'
import { NavLink as Nav, useLocation } from 'react-router-dom'

interface NavLinkProps {
  children: ReactNode
  href: string
  onClick?: () => void
}
export function NavLink({ children, href }: NavLinkProps) {
  const { pathname } = useLocation()

  const isCurrentPath = pathname === href

  return (
    <Nav
      to={href}
      className={clsx(
        'relative text-xl text-title md:hover:after:absolute after:top-6 after:mt-3 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-teal-500 after:rounded-full',
        {
          'text-teal-500': isCurrentPath === true,
        },
      )}
    >
      {children}
    </Nav>
  )
}
