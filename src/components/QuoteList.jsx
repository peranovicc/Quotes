import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteQuote } from '../reducers/anecdoteReducer'

const QuoteList = () => {

    const citati = useSelector(store => store)
    const dispatch = useDispatch()
    const vote = (id) => {
        dispatch(voteQuote(id))
      }
    return (
        <>
            <h2>Цитати</h2>
            {
                citati.map(citat =>
                    <div key={citat.id}>
                        <div>
                            {citat.content}
                        </div>
                        <div>
                            has {citat.votes}
                            <button onClick={() => vote(citat.id)}>vote</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default QuoteList