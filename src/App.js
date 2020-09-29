import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Notification from './components/Notification'
import QuoteForm from './components/QuoteForm'
import QuoteList from './components/QuoteList'
import { removeNotification } from './reducers/notificationReducer'

const App = () => {
  const notification = useSelector(store => store.notification)
  const dispatch = useDispatch()

  useEffect(() => {

    let timer = setTimeout(() => {
        dispatch(removeNotification())
    },5000)
    
    return () => clearTimeout(timer)

},[notification,dispatch])

  return (
    <div>
      <Notification />
      <QuoteList />
      <QuoteForm />
    </div>
  )
}

export default App