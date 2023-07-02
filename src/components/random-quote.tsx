import { useRandomQuote } from '../hooks/use-random-quote'
import { Quote } from './quote'
import { Spinner } from './spinner'

export function RandomQuote () {
  const { isLoading, quote } = useRandomQuote()

  if (isLoading) {
    return <Spinner />
  }

  if (quote == null) {
    return <p>quote not found</p>
  }

  return (
    <Quote quote={quote} />
  )
}
