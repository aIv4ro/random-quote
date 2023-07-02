import './App.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { RandomQuote } from './components/random-quote'
import { Route, Switch } from 'wouter'
import { AuthorQuotes } from './components/author-quotes'

function App () {
  return (
    <>
      <Header />
      <main className='h-full pt-16 pb-12'>
        <Switch>
          <Route path='/author/:name'>
            <AuthorQuotes />
          </Route>
          <Route>
            <RandomQuote />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App
