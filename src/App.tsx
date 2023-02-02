import { GitHub } from "react-feather";

export function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white hover:text-slate-800 rounded-md shadow-sm hover:scale-110 ease-in-out duration-500">
        <GitHub />
      </button>
    </div>
  )
}
