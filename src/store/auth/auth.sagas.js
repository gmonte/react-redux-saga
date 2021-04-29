import { takeLatest, delay, put } from 'redux-saga/effects'

import { AuthTypes } from './auth.actions'

function* login({ username, password }) {
  try {
    yield delay(1000) // post pra api

    if (username === 'asd') {
      throw new Error('usuário não encontrado')
    } else if (username === 'dsa') {
      throw new Error('usuário bloqueado')
    }
    
    yield put({
      type: AuthTypes.LOGIN_SUCCESS,
      token: 'reduxémtolegal'
    })
  } catch (e) {
    yield put({
      type: AuthTypes.LOGIN_ERROR,
      error: e.toString()
    })
  }
}

const sagas = [
  takeLatest(AuthTypes.LOGIN, login)
]

export default sagas