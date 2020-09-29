import React from 'react'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { createQuote } from '../reducers/quotesReducer'

const QuoteForm = () => {
    const dispatch = useDispatch()

    const addQuote = (e) => {
        e.preventDefault()
        dispatch(createQuote(e.target.quote.value))
        dispatch(setNotification(`You have added ${e.target.quote.value}`))  
    }

    return (
        <>
        <h2>Креирај нови</h2>
        <form onSubmit={addQuote} >
            <div><input name="quote" /></div>
            <button>Креирај</button>
        </form>
        </>
    )
}

export default QuoteForm