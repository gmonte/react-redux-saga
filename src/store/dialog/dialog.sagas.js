import { takeEvery, put, delay } from 'redux-saga/effects'

import { DialogTypes, DialogCreators } from './dialog.actions'

function* removeDialog({ id }) {
  yield delay(210)
  yield put(DialogCreators.removeDialogSuccess(id))
}

function* resetDialogs() {
  yield delay(210)
  yield put(DialogCreators.resetDialogsSuccess())
}

const sagas = [
  takeEvery(DialogTypes.REMOVE_DIALOG, removeDialog),
  takeEvery(DialogTypes.RESET_DIALOGS, resetDialogs)
]

export default sagas
