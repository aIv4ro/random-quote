import { useRoute } from 'wouter'
import { useAuthorQuotes } from '../hooks/use-author-quotes'
import { Spinner } from './spinner'
import { QuoteText } from './quote-text'

export function AuthorQuotes () {
  const [, params] = useRoute('/author/:name')
  if (params == null) return <>No author name provided</>
  const { name } = params
  const { quotes, isLoading } = useAuthorQuotes({ author: name })

  if (isLoading) return <Spinner />

  if (quotes == null) return <>Author quotes not found</>

  const [firstQuote] = quotes

  return (
    <section>
      <h3 className='text-2xl border-transparent pl-32 border-l-4 my-5'>{firstQuote.quoteAuthor}</h3>
      <ul className='flex flex-col gap-5 overflow-auto'>
        {quotes.map(quote => {
          return (
            <li key={quote._id}>
              <QuoteText text={quote.quoteText} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
