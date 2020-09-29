import { combineReducers, createStore } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import quotesReducer from './reducers/quotesReducer'

const store = createStore(combineReducers(
    {
        quotes: quotesReducer,
        notification: notificationReducer
    })
)

export default store