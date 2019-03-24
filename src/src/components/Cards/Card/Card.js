import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import MaterialUICard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { houseInterface } from '_Utils_/types/interfaces';
import { templateDefaultData } from '_Utils_/types/defaultData';
import { getResolvedTemplate } from '_Utils_/getters/getResolvedTemplate';

import Address from './components/Address';
import Price from './components/Price';
import Area from './components/Area';
import ImagesContainer from './components/ImagesContainer';

import CardStyles from './Card.styles';


const styles = theme => CardStyles(theme);



const Card = ({
  images,
  full_address,
  area,
  price,
  classes,
  sample,
  priceIsNested,
  addressTop,
}) => (
  <MaterialUICard
    className={`${classes.root} ${sample ? classes.sample : ''}`}
    square
  >
    {
      addressTop && (
        <CardContent className={`${classes.textContainer} ${classes.borderBottom}`}>
          <Address
            classes={classes}
            value={full_address}
          />
        </CardContent>
      )
    }
    <ImagesContainer
      images={images}
      classes={classes}
    >
      {priceIsNested && <Price value={price} />}
    </ImagesContainer>
    <CardContent className={`${classes.textContainer} ${classes.borderTop}`}>
      {!addressTop && (
        <Address
          classes={classes}
          value={full_address}
        />
      )}
      {!priceIsNested && <Price value={price} />}
      <Area value={area} />
    </CardContent>
  </MaterialUICard>
);

Card.propTypes = {
  ...houseInterface,
  sample:       PropTypes.bool,
  addressTop:   PropTypes.bool.isRequired,
  priceIsNested:PropTypes.bool.isRequired,
  classes:      PropTypes.object.isRequired,
};

Card.defaultProps = {
  sample: false,
  ...getResolvedTemplate(templateDefaultData.template),
};

export default memo(withStyles(styles)(Card));
