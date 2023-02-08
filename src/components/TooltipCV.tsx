import * as Tooltip from '@radix-ui/react-tooltip'
import { Download } from 'react-feather'
import { saveAs } from 'file-saver'
import CV from '../../PedroCeolato.pdf'

export function TooltipCV() {
  function handleImportCV() {
    saveAs(CV, 'PedroCeolato.pdf')
  }
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={200}>
        <Tooltip.Trigger
          onClick={handleImportCV}
          className="fixed bottom-12 right-10 text-teal-400 hover:text-teal-50 animate-bounce hover:animate-none transition-all duration-500"
        >
          <Download />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="rounded px-2 py-1 bg-teal-200 text-gray-900 font-medium"
            align="end"
          >
            Download my Curriculum
            <Tooltip.Arrow className="fill-teal-200" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
