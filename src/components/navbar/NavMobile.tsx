import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Menu, X } from 'react-feather'
import { teal } from 'tailwindcss/colors'
import { ButtonImportCV } from '../ButtonImportCV'

import { Logo } from './Logo'
import { NavLink } from './NavLink'

export function NavMobile() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex items-center justify-between p-8 pb-16">
      <Logo />
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button>
            <Menu size={24} color={teal[50]} />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed w-screen top-0 h-screen bg-bgOpacity/80" />
          <Dialog.Content className="fixed top-0 w-full h-4/5 bg-background rounded-b-[100px]">
            <Dialog.Close
              asChild
              className="absolute bg-transparent border-none top-8 right-8"
            >
              <button>
                <X size={24} color={teal[50]} />
              </button>
            </Dialog.Close>
            <nav className="flex flex-col items-center gap-12 pt-32">
              <NavLink href="/">
                <div onClick={() => setOpen(false)}>Home</div>
              </NavLink>
              <NavLink href="/projects">
                <div onClick={() => setOpen(false)}>Projects</div>
              </NavLink>
              <ButtonImportCV />
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
