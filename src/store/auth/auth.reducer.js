import { createReducer } from 'reduxsauce'

import { AuthTypes } from './auth.actions'

const INITIAL_STATE = {
  authenticated: false,
  loading: false,
  token: null,

  error: null
}

const login = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
  error: INITIAL_STATE.error
})

const loginSuccess = (state = INITIAL_STATE, { token }) => ({
  ...state,
  authenticated: true,
  loading: false,
  token
})

const loginError = (state = INITIAL_STATE, { error }) => ({
  ...state,
  loading: false,
  error
})

const logout = () => ({ ...INITIAL_STATE })

export default createReducer(INITIAL_STATE, {
  [AuthTypes.LOGIN]: login,
  [AuthTypes.LOGIN_SUCCESS]: loginSuccess,
  [AuthTypes.LOGIN_ERROR]: loginError,
  [AuthTypes.LOGOUT]: logout
})