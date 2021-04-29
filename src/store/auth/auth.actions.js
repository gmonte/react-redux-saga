import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  login: ['username', 'password'],
  loginSuccess: ['token'],
  loginError: ['error'],
  logout: []
})

export {
  Types as AuthTypes,
  Creators as AuthCreators
}