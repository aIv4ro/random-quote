import { useEffect, useState } from 'react'
import { type Quote } from '../types/quote'
import { getRandomQuote } from '../services/random-quote'
import { AbortError } from '../types/exceptions/abort-error'

export function useRandomQuote () {
  const [isLoading, setIsLoading] = useState(true)
  const [quote, setQuote] = useState<Quote | null>()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    const abortController = new AbortController()

    getRandomQuote(abortController)
      .then(randomQuote => {
        setQuote(randomQuote)
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
  }, [])

  return { isLoading, quote, error }
}
