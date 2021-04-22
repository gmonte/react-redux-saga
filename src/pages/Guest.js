import React, { useRef, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { AUTH_TYPES } from '../store/auth/auth.reducer'
import { selectAuthLoading, selectAuthError } from '../store/auth/auth.selector'

const Guest = () => {
  const dispatch = useDispatch()

  const loading = useSelector(selectAuthLoading)
  const error = useSelector(selectAuthError)

  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleLogin = useCallback(
    () => {
      dispatch({
        type: AUTH_TYPES.LOGIN,
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
    },
    [dispatch]
  )

  return (
    <div>
      <input disabled={ loading } ref={ usernameRef } placeholder="Username" />
      <input disabled={ loading } ref={ passwordRef } placeholder="Password" />

      <button disabled={ loading } onClick={ handleLogin }>
        login
      </button>

      <br />

      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  )
}

export default Guest;