import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Filter from './components/Filter'
import Notification from './components/Notification'
import QuoteForm from './components/QuoteForm'
import QuoteList from './components/QuoteList'
import { initQuotes } from './reducers/quotesReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(initQuotes())
  },[dispatch])

  return (
    <div>
      <Notification />
      <Filter />
      <QuoteForm />
      <QuoteList />
    </div>
  )
}

export default App