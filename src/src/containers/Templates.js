import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  templateInterface,
  templatesInterface,
} from '_Utils_/types/interfaces';

import {
  getTemplates,
  setCurrentTemplate,
} from '../store/houses/housesActionCreators';

import {
  getCurrentTemplate,
  getTemplatesList,
  getTemplatesLoadingStatus,
  getTemplatesLoadingError,
} from '../store/houses/housesSelectors';

import TemplatesLayout from '../components/Templates/TemplatesLayout/TemplatesLayout';
import Title from '../components/Templates/Title/Title';
import TemplatesForm from '../components/Templates/TemplatesForm/TemplatesForm';


const Templates = ({
  currentTemplate,
  templates,
  loading,
  loadingError,
  getTemplates,
  setCurrentTemplate,
  onClose,
}) => {
  useEffect(() => {
    (templates.length <= 1) && getTemplates();
  }, []);
  
  return (
    <TemplatesLayout
      onClose={onClose}
      title={(
        <Title
          loading={loading}
          loadingError={loadingError}
        />
      )}
      form={(
        <TemplatesForm
          currentTemplateId={currentTemplate.id}
          templates={templates}
          onSelect={(type) => { setCurrentTemplate(type); onClose(); }}
          onClose={onClose}
        />
      )}
    />
  );
};

Templates.propTypes = {
  currentTemplate:    PropTypes.shape(templateInterface).isRequired,
  templates:          templatesInterface.isRequired,
  loading:            PropTypes.bool.isRequired,
  loadingError:       PropTypes.bool.isRequired,
  getTemplates:       PropTypes.func.isRequired,
  setCurrentTemplate: PropTypes.func.isRequired,
  onClose:            PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentTemplate:  getCurrentTemplate(state),
  templates:        getTemplatesList(state),
  loading:          getTemplatesLoadingStatus(state),
  loadingError:     getTemplatesLoadingError(state),
});

const mapDispatchToProps = {
  getTemplates,
  setCurrentTemplate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Templates);
