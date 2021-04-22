import { AUTH_TYPES } from '../auth/auth.reducer'

const INITIAL_STATE = {
  name: 'Pedro',
  age: null
}

export const USER_TYPES = {
  CHANGE_USER_NAME: 'CHANGE_USER_NAME'
}

const changeUserName = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    name: action.name
  }
}

const logout = () => ({ ...INITIAL_STATE })

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case USER_TYPES.CHANGE_USER_NAME: return changeUserName(state, action)
    case AUTH_TYPES.LOGOUT: return logout(state, action)

    default: return state
  }
}

export default userReducer