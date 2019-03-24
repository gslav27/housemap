import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import CardLayoutPlaceholder from '../Card/CardPlaceholder';

import CardsLayoutStyles from './CardsLayout.styles';


const styles = theme => CardsLayoutStyles(theme);



const CardsLayout = ({
  cards,
  loading,
  loadingError,
  classes,
}) => (
  <section className={classes.root}>
    {
      loading && !loadingError
        ? Array(8).fill(1).map((_, i) => (<CardLayoutPlaceholder key={i} />))
        : cards
    }
    {loadingError && 'Loading Error...'}
  </section>
);


CardsLayout.propTypes = {
  cards:        PropTypes.node.isRequired,
  loading:      PropTypes.bool.isRequired,
  loadingError: PropTypes.bool.isRequired,
  classes:      PropTypes.object.isRequired,
};


export default withStyles(styles)(CardsLayout);
