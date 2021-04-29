import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  createDialog: ['id', 'Component', 'props'],
  removeDialog: ['id'],
  removeDialogSuccess: ['id'],
  resetDialogs: [],
  resetDialogsSuccess: []
})

export {
  Types as DialogTypes,
  Creators as DialogCreators
}