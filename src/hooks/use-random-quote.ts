import { useEffect, useState } from 'react'
import { type Quote } from '../types/quote'
import { getRandomQuote } from '../services/random-quote'

export function useRandomQuote () {
  const [isLoading, setIsLoading] = useState(false)
  const [quote, setQuote] = useState<Quote | null>()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    getRandomQuote()
      .then(randomQuote => {
        setQuote(randomQuote)
      })
      .catch(err => {
        setError(err.message)
      })
      .finally(() => { setIsLoading(false) })
  }, [setQuote, setIsLoading, setError])

  return { isLoading, quote, error }
}
