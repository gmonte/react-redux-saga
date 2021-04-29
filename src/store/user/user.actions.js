import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  changeUserName: ['name']
})

export {
  Types as UserTypes,
  Creators as UserCreators
}