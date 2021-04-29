import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux'

import { selectUserName } from '../store/user/user.selector'

import { DialogCreators } from '../store/dialog/dialog.actions'

import ExampleModal from '../modals/ExampleModal'

const Book = () => {
  const dispatch = useDispatch()

  const userName = useSelector(selectUserName)

  const handleOpen = useCallback(
    () => {
      dispatch(DialogCreators.createDialog(
        'meu-modal',
        ExampleModal
      ))
    },
    [dispatch]
  )

  return (
    <>
      <div>
        Book of: {userName}
      </div>

      <button onClick={ handleOpen }>
        abrir modal
      </button>
    </>
  );
};

export default Book;