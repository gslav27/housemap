import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Settings from '@material-ui/icons/Settings';

import Templates from '../../../containers/Templates';

import OpenTemplatesButtonStyles from './OpenTemplatesButton.styles';


const styles = theme => OpenTemplatesButtonStyles(theme);



const OpenTemplatesButton = ({ classes }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      <Button
        variant='contained'
        aria-owns={openDialog ? 'cardtype-form' : undefined}
        aria-haspopup='true'
        onClick={() => setOpenDialog(true)}
        color='secondary'
        title='select card type'
      >
        <Settings className={classes.leftIcon} />
        Card type
      </Button>
      {openDialog && <Templates onClose={() => setOpenDialog(false)} />}
    </div>
  );
};

OpenTemplatesButton.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(OpenTemplatesButton);
