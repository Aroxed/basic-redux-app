import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'

const initalState = {
    calc: {v:100}
}

const middleware = [thunk]

// const store = createStore(rootReducer, initalState)
// Error: Actions must be plain objects. Use custom middleware for async actions.
const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;