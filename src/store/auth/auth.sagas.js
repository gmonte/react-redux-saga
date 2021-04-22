import { takeLatest, delay, put } from 'redux-saga/effects'

import { AUTH_TYPES } from './auth.reducer'

function* login({ username, password }) {
  try {
    yield delay(1000) // post pra api

    if (username === 'asd') {
      throw new Error('usuário não encontrado')
    } else if (username === 'dsa') {
      throw new Error('usuário bloqueado')
    }
    
    yield put({
      type: AUTH_TYPES.LOGIN_SUCCESS,
      token: 'reduxémtolegal'
    })
  } catch (e) {
    yield put({
      type: AUTH_TYPES.LOGIN_ERROR,
      error: e.toString()
    })
  }
}

const sagas = [
  takeLatest(AUTH_TYPES.LOGIN, login)
]

export default sagas