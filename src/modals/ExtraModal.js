import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux'

import { DialogCreators } from '../store/dialog/dialog.actions'

import Modal from '../components/Modal'

import Button from '@material-ui/core/Button'

const ExtraModal = ({ id, open, handleClose, parentId }) => {
  const dispatch = useDispatch()

  const handleReset = useCallback(
    () => {
      handleClose()
      dispatch(DialogCreators.removeDialog(parentId))
    },
    [dispatch, handleClose, parentId]
  )

  return (
    <Modal
      id={ id }
      open={ open }
      FooterComponent={ () => (
        <>
          <Button color="secondary" onClick={ handleReset }>
            reset modais
          </Button>
          <Button onClick={ handleClose }>
            fechar modal
          </Button>
        </>
      )}
    >
      <p>meu outro modal</p>
    </Modal>
  );
};

ExtraModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default ExtraModal;