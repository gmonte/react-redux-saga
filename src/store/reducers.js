import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import authReducer from './auth/auth.reducer'
import dialogReducer from './dialog/dialog.reducer'

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  dialog: dialogReducer
})
