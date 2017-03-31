import { applyMiddleware, compose, createStore } from 'redux'
// when we configure store we need to add the reducers and the initial state
import reducer from './reducer'
import logger from 'redux-logger'

// add middleware
let finalCreateStore = compose(
	applyMiddleware(logger())
)(createStore)
// compose returns a function which then takes in createStore then composes it together to finalCreateStore
// then add it to the createStore


export default function configureStore(initialState={todos: []}) {
	return finalCreateStore(reducer, initialState)
}

// we want to separate this out, so we can add middleware
