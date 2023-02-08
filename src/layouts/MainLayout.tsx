import { Outlet } from 'react-router-dom'
import { NavDesktop } from '../components/navbar/NavDesktop'
import { useMediaQuery } from 'react-responsive'
import { NavMobile } from '../components/navbar/NavMobile'
import { TooltipCV } from '../components/TooltipCV'

export function MainLayout() {
  const isDesktop = useMediaQuery({ query: `(min-width: 768px)` })

  return (
    <div>
      {isDesktop ? <NavDesktop /> : <NavMobile />}
      <Outlet />
      {isDesktop && <TooltipCV />}
    </div>
  )
}
