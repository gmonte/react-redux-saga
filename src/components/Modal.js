import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

const Modal = ({ id, open, children, FooterComponent }) => {
  useEffect(
    () => {
      console.log('modal nasceu')
      return () => {
        console.log('modal morreu')
      }
    },
    []
  )

  return (
    <Dialog id={ id } transitionDuration={ 200 } open={ open }>
      <DialogContent>
        {children}
      </DialogContent>

      {FooterComponent && (
        <DialogActions>
          <FooterComponent />
        </DialogActions>
      )}
    </Dialog>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  FooterComponent: PropTypes.func
};

Modal.defaultProps = {
  FooterComponent: undefined
}

export default Modal;