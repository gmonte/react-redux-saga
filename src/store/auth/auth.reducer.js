const INITIAL_STATE = {
  authenticated: false,
  loading: false,
  token: null,

  error: null
}

export const AUTH_TYPES = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT'
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

const authReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case AUTH_TYPES.LOGIN: return login(state, action)
    case AUTH_TYPES.LOGIN_SUCCESS: return loginSuccess(state, action)
    case AUTH_TYPES.LOGIN_ERROR: return loginError(state, action)
    case AUTH_TYPES.LOGOUT: return logout(state, action)

    default: return state
  }
}

export default authReducer