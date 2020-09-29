import { applyMiddleware, combineReducers, createStore } from 'redux'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import quotesReducer from './reducers/quotesReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers(
    {
        quotes: quotesReducer,
        notification: notificationReducer,
        filter: filterReducer
    })

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store