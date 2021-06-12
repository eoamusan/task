import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import posts from './postReducer'
import pages from './pageReducer'

const reducers = (history) => combineReducers({
    router: connectRouter(history),
    posts,
    pages
})

export default reducers;
