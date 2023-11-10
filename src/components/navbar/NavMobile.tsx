import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Menu, X } from 'react-feather'
import { ButtonImportCV } from '../ButtonImportCV'

import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { ToggleIcon } from '../ToggleIcon'
import { useLocation } from 'react-router-dom'

export function NavMobile() {
  const { pathname } = useLocation()

  const [open, setOpen] = useState(false)
  return (
    <div className="flex items-center justify-between p-8 pb-16">
      <Logo />
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild className="text-title">
          <button>
            <Menu size={24} />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed w-screen top-0 h-screen bg-bgOpacity/80" />
          <Dialog.Content className="fixed top-0 w-full h-4/5 bg-body rounded-b-[100px] z-10">
            <Dialog.Close
              asChild
              className="absolute bg-transparent border-none top-8 right-8 text-title"
            >
              <button>
                <X size={24} />
              </button>
            </Dialog.Close>
            <nav className="flex flex-col items-center gap-12 pt-32">
              <NavLink href="/" isActive={pathname === '/'}>
                <div onClick={() => setOpen(false)}>Home</div>
              </NavLink>
              <NavLink
                href="/projects"
                isActive={pathname.startsWith('/projects')}
              >
                <div onClick={() => setOpen(false)}>Projects</div>
              </NavLink>
              <ToggleIcon />
              <ButtonImportCV />
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
