import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HomeLink from '../HomeLink/HomeLink';
import TemplatesButton from '../OpenTemplatesButton/OpenTemplatesButton';

import HeaderLayoutStyles from './HeaderLayout.styles';


const styles = theme => HeaderLayoutStyles(theme);



const HeaderLayout = ({ classes }) => (
  <AppBar
    className={classes.appBar}
    position='static'
    elevation={2}
  >
    <Toolbar className={classes.toolbar}>
      <HomeLink />
      <TemplatesButton />
    </Toolbar>
  </AppBar>
);


HeaderLayout.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(memo(HeaderLayout));
