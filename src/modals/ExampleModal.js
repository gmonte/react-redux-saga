import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Modal from '../components/Modal'
import ExtraModal from './ExtraModal'

import { useDispatch } from 'react-redux'

import { DialogCreators } from '../store/dialog/dialog.actions'

import Button from '@material-ui/core/Button'

const ExampleModal = ({ id, open, handleClose, userName }) => {
  const dispatch = useDispatch()

  const handleOpenExtra = useCallback(
    () => {
      dispatch(DialogCreators.createDialog(
        'meu-modal-extra',
        ExtraModal,
        { parentId: id }
      ))
    },
    [dispatch, id]
  )

  return (
    <Modal
      id={ id }
      open={ open }
      FooterComponent={ () => (
        <>
          <Button color="primary" onClick={ handleOpenExtra }>
            abrir outro modal
          </Button>
          <Button onClick={ handleClose }>
            fechar modal
          </Button>
        </>
      )}
    >
      <h3>meu modal - {userName}</h3>
    </Modal>
  );
};

ExampleModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default ExampleModal;