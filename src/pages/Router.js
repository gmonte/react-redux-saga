import React from 'react';

import { useSelector } from 'react-redux'

import { selectIsAuthenticated } from '../store/auth/auth.selector'

import Authenticated from './Authenticated'
import Guest from './Guest'

const Router = () => {
  const authenticated = useSelector(selectIsAuthenticated)

  return authenticated ? <Authenticated /> : <Guest />
}

export default Router;