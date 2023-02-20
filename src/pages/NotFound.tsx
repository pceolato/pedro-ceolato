import notFoundImg from '../assets/notFound404.svg'

export function NotFound() {
  return (
    <div className="h-screen max-w-screen-sm mx-auto flex flex-col items-center justify-center gap-4">
      <h1 className="text-teal-50 text-xl md:text-5xl font-semibold">
        Page not found{' '}
        <a href="/" className="font-bold text-teal-500 hover:underline">
          go to Home
        </a>
      </h1>
      <img
        src={notFoundImg}
        alt="image of page not found"
        width={598}
        height={397}
      />
    </div>
  )
}
