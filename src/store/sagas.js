import { all } from 'redux-saga/effects'

import authSagas from './auth/auth.sagas'
import dialogSagas from './dialog/dialog.sagas'

export default function* root() {
  return yield all([
    ...authSagas,
    ...dialogSagas
  ])
}
