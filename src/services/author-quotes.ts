import { AbortError } from '../types/exceptions/abort-error'
import { NotFound } from '../types/exceptions/not-found'
import { UnexpectedError } from '../types/exceptions/unexpected-error'
import { type Quote } from '../types/quote'

interface AuthorQuotesRequest {
  author: string
}

export async function getAuthorQuotes ({ author }: AuthorQuotesRequest, abortController?: AbortController): Promise<Quote[]> {
  return await fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${author}`, { signal: abortController?.signal })
    .then(async res => await res.json())
    .then(res => {
      const { data } = res
      if (data == null || data[0] == null) throw new NotFound('Author quotes not found')
      return data as Quote[]
    })
    .catch(err => {
      if (err.name === 'AbortError') throw new AbortError()
      throw new UnexpectedError(err.message)
    })
}
