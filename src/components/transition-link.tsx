import { type PropsWithChildren } from 'react'
import { Link, type LinkProps, type LocationHook } from 'wouter'
import { navigate } from 'wouter/use-location'
import { useViewTransition } from '../hooks/use-view-transition'

export function TransitionLink (props: PropsWithChildren<LinkProps<LocationHook>>) {
  const { hasSupport, startTransition } = useViewTransition()

  const handleClick = (event: any) => {
    if (props.href == null || !hasSupport) return
    event.preventDefault()
    startTransition(() => { navigate(props.href) })
  }

  return <Link {...props} onClick={hasSupport ? handleClick : undefined} />
}
