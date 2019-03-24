import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import TextPlaceholder from '_Ui_/TextLoadingPlaceholder';

import CardLayoutStyles from './Card.styles';


const styles = theme => CardLayoutStyles(theme);



const CardLayoutPlaceholder = ({ classes }) => (
  <Card className={classes.root} square>
    <div className={classes.imagesContainer} />
    <CardContent className={`${classes.textContainer} ${classes.borderTop}`}>
      <TextPlaceholder />
      <TextPlaceholder
        height='2em'
        width='50%'
      />
      <TextPlaceholder width='30%' />
    </CardContent>
  </Card>
);


CardLayoutPlaceholder.propTypes = { classes: PropTypes.object.isRequired };


export default withStyles(styles)(CardLayoutPlaceholder);
