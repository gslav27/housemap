import React from 'react';

import Typography from '@material-ui/core/Typography';

import { houseInterface } from '_Utils_/types/interfaces';



const Price = ({ value }) => (
  <Typography
    gutterBottom
    variant='h5'
    component='p'
    color='inherit'
  >
    ${value ? value.toLocaleString('fr') : '-'}
  </Typography>
);

Price.propTypes = { value: houseInterface.price };

Price.defaultProps = { value: undefined };

export default Price;
