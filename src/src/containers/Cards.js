import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { housesInterface, templateInterface } from '_Utils_/types/interfaces';
import { getResolvedTemplate } from '_Utils_/getters/getResolvedTemplate';

import { getHouses } from '../store/houses/housesActionCreators';

import {
  getHousesList,
  getHousesLoadingStatus,
  getHousesLoadingError,
  getCurrentTemplate,
} from '../store/houses/housesSelectors';

import CardsLayout from '../components/Cards/CardsLayout/CardsLayout';
import Card from '../components/Cards/Card/index';


const Cards = ({
  houses,
  loading,
  loadingError,
  currentTemplate,
  getHouses,
}) => {
  useEffect(() => { getHouses(); }, []);

  // calculate common template params for Card's list
  const [
    currentTemplateResolved,
    setCurrentTemplateResolved,
  ] = useState(() => getResolvedTemplate(currentTemplate.template));

  // update common template params for Card's list
  useEffect(() => {
    setCurrentTemplateResolved(getResolvedTemplate(currentTemplate.template));
  }, [currentTemplate]);

  return (
    <CardsLayout
      cards={
        houses.map(house => (
          <Card
            key={house.id}
            templateResolvedParams={currentTemplateResolved}
            {...house}
          />
        ))
      }
      houses={houses}
      loading={loading}
      loadingError={loadingError}
    />
  );
};

Cards.propTypes = {
  houses:           housesInterface.isRequired,
  currentTemplate:  PropTypes.shape(templateInterface).isRequired,
  loading:          PropTypes.bool.isRequired,
  loadingError:     PropTypes.bool.isRequired,
  getHouses:        PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  houses:          getHousesList(state),
  loading:         getHousesLoadingStatus(state),
  loadingError:    getHousesLoadingError(state),
  currentTemplate: getCurrentTemplate(state),
});

const mapDispatchToProps = ({ getHouses });

export default connect(mapStateToProps, mapDispatchToProps)(Cards);

