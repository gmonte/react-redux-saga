import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux'

import UserCard from '../containers/UserCard'
import Book from '../containers/Book'

import { AUTH_TYPES } from '../store/auth/auth.reducer'

const Authenticated = () => {
  const dispatch = useDispatch()

  const handleLogout = useCallback(
    () => dispatch({ type: AUTH_TYPES.LOGOUT }),
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