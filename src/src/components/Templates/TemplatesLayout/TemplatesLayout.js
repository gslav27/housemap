import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';

import styles from './TemplatesLayout.styles';



const TemplatesLayout = ({
  onClose,
  title,
  form,
  classes,
}) => (
  <Dialog
    id='cardtype-form'
    classes={{ paper: classes.dialogPaper }}
    onClose={onClose}
    maxWidth={false}
    open
  >
    {title}
    {form}
  </Dialog>
);


TemplatesLayout.propTypes = {
  onClose:  PropTypes.func.isRequired,
  title:    PropTypes.node.isRequired,
  form:     PropTypes.node.isRequired,
  classes:  PropTypes.object.isRequired,
};


export default withStyles(styles)(TemplatesLayout);
