import { RefreshIcon } from '../icons/refresh'

export function Header () {
  function handleClick () {
    location.href = '/'
  }

  return (
    <header className="flex justify-end fixed top-0 left-0 right-0 p-3 border-b bg-zinc-900 backdrop-blur-md">
      <button onClick={handleClick} className="flex flex-row items-center gap-2 p-2 bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors">
        random
        <RefreshIcon />
      </button>
    </header>
  )
}
