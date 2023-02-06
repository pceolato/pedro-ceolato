import { Outlet } from 'react-router-dom'
import { NavDesktop } from '../components/NavDesktop'
import { useMediaQuery } from 'react-responsive'
import { saveAs } from 'file-saver'
import CV from '../../PedroCeolato.pdf'
import { NavMobile } from '../components/NavMobile'

export function MainLayout() {
  const isDesktop = useMediaQuery({ query: `(min-width: 768px)` })
  function handleImportCV() {
    saveAs(CV, 'PedroCeolato.pdf')
  }
  return (
    <div>
      {isDesktop ? <NavDesktop /> : <NavMobile />}
      <Outlet />
      <button
        onClick={handleImportCV}
        className="fixed bottom-8 right-8 text-teal-50"
      >
        CV
      </button>
    </div>
  )
}
