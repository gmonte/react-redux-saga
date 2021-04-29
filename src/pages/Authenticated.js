import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux'

import UserCard from '../containers/UserCard'
import Book from '../containers/Book'

import { AuthTypes } from '../store/auth/auth.actions'

const Authenticated = () => {
  const dispatch = useDispatch()

  const handleLogout = useCallback(
    () => dispatch({ type: AuthTypes.LOGOUT }),
    [dispatch]
  )

  return (
    <>
      <UserCard />
      <Book />

      <br />

      <button onClick={ handleLogout }>
        LOGOUT
      </button>
    </>
  )
}

export default Authenticated;