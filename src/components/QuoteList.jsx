import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { voteQuote } from '../reducers/quotesReducer'
import { updateQuote } from '../service'

const QuoteList = () => {

    const quotes = useSelector(store => store.quotes)
    const filter = useSelector(store => store.filter)
    const dispatch = useDispatch()
    const vote = (id) => {
        let quote = quotes.find(quote => quote.id === id)

        dispatch(voteQuote(id))
        updateQuote(id,{votes: quote.votes + 1})
        dispatch(setNotification(`You have voted for: '${quote.content}'`,5))
    }
    return (
        <>
            <h2>Quotes</h2>
            {
                quotes.filter(quote => quote.content.toLowerCase().includes(filter.toLowerCase())).map(quote =>
                    <div key={quote.id}>
                        <div>
                            {quote.content}
                        </div>
                        <div>
                            has {quote.votes}
                            <button onClick={() => vote(quote.id)}>votes</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default QuoteList