import { ArrowRight } from '../icons/arrow-right'
import { type Quote as QuoteI } from '../types/quote'
import { QuoteText } from './quote-text'
import { TransitionLink } from './transition-link'

interface Props {
  quote: QuoteI
}

export function Quote ({ quote }: Props) {
  return (
    <article className='h-full flex flex-col justify-center gap-10 px-16'>
      <QuoteText text={quote.quoteText} />
      <footer>
        <TransitionLink href={`/author/${quote.quoteAuthor}`} className='pl-32 py-4 pr-10 border-l-4 border-transparent rounded-md bg-zinc-700 hover:bg-zinc-600 flex items-center justify-between'>
          <div className='flex flex-col transition-colors'>
            <strong className='text-lg' style={{ viewTransitionName: 'author-name' }}>{quote.quoteAuthor}</strong>
            <small>{quote.quoteGenre}</small>
          </div>
          <ArrowRight />
        </TransitionLink>
      </footer>
    </article>
  )
}
