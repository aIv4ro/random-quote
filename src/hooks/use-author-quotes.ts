import { useEffect, useState } from 'react'
import { getAuthorQuotes } from '../services/author-quotes'
import { type Quote } from '../types/quote'
import { AbortError } from '../types/exceptions/abort-error'

export function useAuthorQuotes ({ author }: { author: string }) {
  const [isLoading, setIsLoading] = useState(true)
  const [quotes, setQuotes] = useState<Quote[] | null>()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    const abortController = new AbortController()
    getAuthorQuotes({ author }, abortController)
      .then(randomQuote => {
        setQuotes(randomQuote)
        setIsLoading(false)
      })
      .catch(err => {
        if (err instanceof AbortError) return
        setError(err.message)
        setIsLoading(false)
      })

    return () => {
      abortController.abort()
    }
  }, [setQuotes, setIsLoading, setError, author])

  return { isLoading, quotes, error }
}
