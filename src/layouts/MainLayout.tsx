import { Outlet } from 'react-router-dom'
import { NavDesktop } from '../components/NavDesktop'
import { saveAs } from 'file-saver'
import CV from '../../PedroCeolato.pdf'

export function MainLayout() {
  function handleImportCV() {
    saveAs(CV, 'PedroCeolato.pdf')
  }
  return (
    <div>
      <NavDesktop />
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
