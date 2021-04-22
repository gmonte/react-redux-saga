import { all } from 'redux-saga/effects'

import authSagas from './auth/auth.sagas'

export default function* root() {
  return yield all([
    ...authSagas
  ])
}
