import { useEffect, useState } from 'react'
import { getAuthorQuotes } from '../services/author-quotes'
import { type Quote } from '../types/quote'

export function useAuthorQuotes ({ author }: { author: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const [quotes, setQuotes] = useState<Quote[] | null>()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    getAuthorQuotes({ author })
      .then(randomQuote => {
        setQuotes(randomQuote)
      })
      .catch(err => {
        setError(err.message)
      })
      .finally(() => { setIsLoading(false) })
  }, [setQuotes, setIsLoading, setError, author])

  return { isLoading, quotes, error }
}
