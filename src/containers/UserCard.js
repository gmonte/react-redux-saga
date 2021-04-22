import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { selectUserName } from '../store/user/user.selector'
import { USER_TYPES } from '../store/user/user.reducer'

const UserCard = () => {
  const dispatch = useDispatch()

  const userName = useSelector(selectUserName)

  const handleChangeName = useCallback(
    () => {
      dispatch({
        type: USER_TYPES.CHANGE_USER_NAME,
        name: 'mateus'
      })
    },
    [dispatch]
  )

  return (
    <div
      style={{
        border: '1px solid #020202',
        borderRadius: 4,
        padding: 10,
        margin: 10
      }}
    >
      Nome: {userName}

      <br />

      <button onClick={ handleChangeName }>
        mudar nome
      </button>
    </div>
  );
};

export default UserCard;