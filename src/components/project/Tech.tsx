interface TechProps {
  name: string
}

export function Tech({ name }: TechProps) {
  return (
    <div className="px-1 py-[2px] bg-teal-200 text-gray-900 rounded text-xs font-semibold uppercase">
      {name}
    </div>
  )
}
