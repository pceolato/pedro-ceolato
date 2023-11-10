import clsx from 'clsx'
import { ReactNode } from 'react'
import { NavLink as Nav } from 'react-router-dom'

interface NavLinkProps {
  children: ReactNode
  href: string
  onClick?: () => void
  isActive: boolean
}
export function NavLink({ children, href, isActive }: NavLinkProps) {
  return (
    <Nav
      to={href}
      className={clsx(
        'relative text-xl text-title md:hover:after:absolute after:top-6 after:mt-3 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-teal-500 after:rounded-full',
        {
          'text-teal-500': isActive === true,
        },
      )}
    >
      {children}
    </Nav>
  )
}
