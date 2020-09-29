import { getAllQuotes, postQuote } from "../service"

export const createQuote = (text) => { 
  return async dispatch => {
    const { data: quote } = await postQuote({
      content: text,
      votes: 0
    })

    dispatch({
      type: 'ADD_QUOTE',
      data: {
        content: quote.content,
        id: quote.id
      }
    })
  }
}

export const voteQuote = (id) => {
  return {
    type: 'VOTE_QUOTE',
    data: { id }
  }
}

export const initQuotes = () => {
  return async dispatch => {
    const { data:quotes } = await getAllQuotes()
    
    dispatch({
      type: 'INIT_QUOTES',
      data: {
        quotes: quotes
      }
    })
  }
}

const quotesReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat({
        content: action.data.content,
        id: action.data.id,
        votes: 0
      })

    case 'VOTE_QUOTE':
      let tmp = []
      state.forEach(el => tmp.push({...el}))
      tmp[tmp.findIndex(el => el.id === action.data.id)].votes += 1
      tmp.sort((a,b) => b.votes - a.votes)
      return tmp
    case 'INIT_QUOTES':
      action.data.quotes.sort((a,b) => b.votes - a.votes)
      return action.data.quotes
    default:
      return state
  }
}

export default quotesReducer