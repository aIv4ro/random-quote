import { useCallback, useRef } from 'react'

export function useViewTransition () {
  // @ts-expect-error new features
  const hasSupport = useRef(document.startViewTransition != null)

  const startTransition = useCallback((cb: () => void) => {
    if (!hasSupport.current) return
    // @ts-expect-error new features
    document.startViewTransition(() => {
      cb()
    })
  }, [hasSupport.current])

  return { hasSupport: hasSupport.current, startTransition }
}
