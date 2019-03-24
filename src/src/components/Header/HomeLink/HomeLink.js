import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './HomeLink.styles';



const HomeLink = ({ classes }) => (
  <a
    className={classes.root}
    href={`${process.env.PUBLIC_URL}/`}
  >
    <Typography
      variant='h5'
      color='primary'
    >
      HousesMap
    </Typography>
  </a>
);

HomeLink.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(HomeLink);
