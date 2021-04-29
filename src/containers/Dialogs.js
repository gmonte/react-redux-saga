import React from 'react';

import { useSelector, useDispatch } from 'react-redux'

import map from 'lodash/map'

import { DialogCreators } from '../store/dialog/dialog.actions'
import { selectDialogs } from '../store/dialog/dialog.selector'

const Dialogs = () => {
  const dispatch = useDispatch()
  const dialogs = useSelector(selectDialogs)

  return map(dialogs, ({ Component, props = {}, open }, id) => (
    <Component
      key={ id }
      id={ id }
      open={ open }
      handleClose={ () => dispatch(DialogCreators.removeDialog(id)) }
      {...props}
    />
  ))
}

export default Dialogs;