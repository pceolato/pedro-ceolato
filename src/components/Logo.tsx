import { Code } from 'react-feather'
import { teal } from 'tailwindcss/colors'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-teal-50 text-xl">Pedro Ceolato</span>
      <Code color={teal[500]} size={32} />
    </div>
  )
}
