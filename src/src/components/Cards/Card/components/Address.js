import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { houseInterface } from '_Utils_/types/interfaces';



const Address = ({ value, classes }) => (
  <Typography
    className={classes.fullAddress}
    component='p'
    title={value}
  >
    {value}
  </Typography>
);

Address.propTypes = {
  value:    houseInterface.full_address,
  classes:  PropTypes.object.isRequired,
};

Address.defaultProps = { value: 'location is not defined' };

export default Address;
