import React from 'react';
import PropTypes from 'prop-types';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { houseInterface } from '_Utils_/types/interfaces';



const ImagesContainer = ({ images, classes, children }) => (
  <div className={classes.imagesContainer}>
    <CardMedia
      className={classes.media}
      component='img'
      image={images[0]}
      alt='house'
      title='house'
    />
    {
      children && (
        <CardContent className={classes.textContainerNested}>
          {children}
        </CardContent>
      )
    }
  </div>
);

ImagesContainer.propTypes = {
  images:   houseInterface.images.isRequired,
  classes:  PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default ImagesContainer;
