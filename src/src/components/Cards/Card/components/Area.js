import React from 'react';

import Typography from '@material-ui/core/Typography';

import { houseInterface } from '_Utils_/types/interfaces';



const Area = ({ value }) => (
  <Typography component='p'>
    {value ? value.toLocaleString('fr') : '-'} sq.fr.
  </Typography>
);

Area.propTypes = { value: houseInterface.area };

Area.defaultProps = { value: undefined };

export default Area;
