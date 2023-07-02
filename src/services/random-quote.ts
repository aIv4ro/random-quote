import { AbortError } from '../types/exceptions/abort-error'
import { NotFound } from '../types/exceptions/not-found'
import { UnexpectedError } from '../types/exceptions/unexpected-error'
import { type Quote } from '../types/quote'

export async function getRandomQuote (abortController?: AbortController): Promise<Quote> {
  return await fetch('https://quote-garden.onrender.com/api/v3/quotes/random', { signal: abortController?.signal })
    .then(async res => await res.json())
    .then(res => {
      const { data } = res
      if (data == null || data[0] == null) throw new NotFound('Random quote not found')
      return data[0] as Quote
    })
    .catch(err => {
      if (err.name === 'AbortError') throw new AbortError()
      throw new UnexpectedError(err.message)
    })
}
