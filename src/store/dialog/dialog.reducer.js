import { createReducer } from 'reduxsauce'
import { DialogTypes } from './dialog.actions'

import omitBy from 'lodash/omitBy'
import mapValues from 'lodash/mapValues'

const INITIAL_STATE = {
  dialogs: {}
}

const createDialog = (state = INITIAL_STATE, { id, Component, props }) => ({
  ...state,
  dialogs: {
    ...state.dialogs,
    [id]: {
      Component,
      open: true,
      props
    }
  }
})

const removeDialog = (state = INITIAL_STATE, { id }) => ({
  ...state,
  dialogs: mapValues(state.dialogs, (item, name) => ({
    ...item,
    open: name === id ? false : item.open
  }))
})

const removeDialogSuccess = (state = INITIAL_STATE, { id }) => ({
  ...state,
  dialogs: omitBy(state.dialogs, (_, name) => name === id)
})

const resetDialogs = (state = INITIAL_STATE) => ({
  ...state,
  dialogs: mapValues(state.dialogs, (item, name) => ({
    ...item,
    open: false
  }))
})

const resetDialogsSuccess = (state = INITIAL_STATE) => ({
  ...state,
  dialogs: { ...INITIAL_STATE.dialogs }
})

export default createReducer(INITIAL_STATE, {
  [DialogTypes.CREATE_DIALOG]: createDialog,
  [DialogTypes.REMOVE_DIALOG]: removeDialog,
  [DialogTypes.REMOVE_DIALOG_SUCCESS]: removeDialogSuccess,
  [DialogTypes.RESET_DIALOGS]: resetDialogs,
  [DialogTypes.RESET_DIALOGS_SUCCESS]: resetDialogsSuccess,
})