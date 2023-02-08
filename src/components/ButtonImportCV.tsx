import { Download } from 'react-feather'
import { saveAs } from 'file-saver'
import CV from '../../PedroCeolato.pdf'

export function ButtonImportCV() {
  function handleImportCV() {
    saveAs(CV, 'PedroCeolato.pdf')
  }

  return (
    <button
      type="button"
      onClick={handleImportCV}
      className="text-teal-50 flex flex-col items-center gap-[2px] text-sm"
    >
      <Download size={20} />
      Download my Curriculum
    </button>
  )
}
