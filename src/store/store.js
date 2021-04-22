import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMiddleware, { END } from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas'

const middlewares = [createLogger({})]

const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
)

store.close = () => store.dispatch(END)
store.runSagas = sagaMiddleware.run
store.runSagas(sagas)

export default store