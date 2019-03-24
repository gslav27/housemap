import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import TitleStyles from './Title.styles';


const styles = theme => TitleStyles(theme);



const Title = ({
  loading,
  loadingError,
  classes,
}) => (
  <DialogTitle
    className={classes.root}
    disableTypography
  >
    <Typography
      variant='h5'
      component='h5'
    >
      Select card type
    </Typography>
    {
      loading && (
        <CircularProgress
          className={classes.loading}
          size={15}
          color='secondary'
        />
      )
    }
    {loadingError && '(Loading Error!)'}
  </DialogTitle>
);


Title.propTypes = {
  loading:      PropTypes.bool.isRequired,
  loadingError: PropTypes.bool.isRequired,
  classes:      PropTypes.object.isRequired,
};


export default withStyles(styles)(Title);
