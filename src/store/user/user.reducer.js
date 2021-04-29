import { createReducer } from 'reduxsauce'
import { AuthTypes } from '../auth/auth.actions'
import { UserTypes } from './user.actions'

const INITIAL_STATE = {
  name: '',
  age: null
}

const changeUserName = (state = INITIAL_STATE, { name }) => ({
  ...state,
  name
})

const logout = () => ({ ...INITIAL_STATE })

export default createReducer(INITIAL_STATE, {
  [UserTypes.CHANGE_USER_NAME]: changeUserName,

  [AuthTypes.LOGOUT]: logout
})