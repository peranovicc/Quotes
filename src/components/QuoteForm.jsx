import React from 'react'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { createQuote } from '../reducers/quotesReducer'

const QuoteForm = () => {
    const dispatch = useDispatch()

    const addQuote = (e) => {
        e.preventDefault()
        
        dispatch(createQuote(e.target.quote.value))  
        dispatch(setNotification(`You have added ${e.target.quote.value}`,5))  
    }

    return (
        <>
        <h2>Create new</h2>
        <form onSubmit={addQuote} >
            <div><input name="quote" /></div>
            <button>Add Quote</button>
        </form>
        </>
    )
}

export default QuoteForm