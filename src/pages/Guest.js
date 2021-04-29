import React, { useRef, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { AuthCreators } from '../store/auth/auth.actions'
import { selectAuthLoading, selectAuthError } from '../store/auth/auth.selector'

const Guest = () => {
  const dispatch = useDispatch()

  const loading = useSelector(selectAuthLoading)
  const error = useSelector(selectAuthError)

  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleLogin = useCallback(
    () => {
      dispatch(AuthCreators.login(
        usernameRef.current.value,
        passwordRef.current.value
      ))
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