import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { templateInterface } from '_Utils_/types/interfaces';
import { templateDefaultData } from '_Utils_/types/defaultData';
import { getResolvedTemplate } from '_Utils_/getters/getResolvedTemplate';



const CardTemplateResolver = ChildComponent => ({
  template,
  templateResolvedParams,
  ...otherProps
}) => {
  const [resolvedTemplate, setResolvedTemplate] = useState(() => (
    // Check for 'template' passed from Parent component and resolve it for <ConfigurableCard />
    // OR
    // use already resolved template (passed from Parent component or default one)
    template
      ? getResolvedTemplate(template.template)
      : templateResolvedParams
  ));

  useEffect(
    () => { setResolvedTemplate(templateResolvedParams); },
    [templateResolvedParams],
  );

  useEffect(
    () => { template && setResolvedTemplate(getResolvedTemplate(template.template)); },
    [template],
  );

  return (
    <ChildComponent
      {...resolvedTemplate}
      {...otherProps}
    />
  );
};

CardTemplateResolver.propTypes = {
  children:               PropTypes.node.isReaquired,
  template:               PropTypes.shape(templateInterface),
  templateResolvedParams: PropTypes.shape({
    addressTop:     PropTypes.bool,
    priceIsNested:  PropTypes.bool,
  }),
};

CardTemplateResolver.defaultProps = {
  template:               undefined,
  templateResolvedParams: getResolvedTemplate(templateDefaultData.template),
};

export default CardTemplateResolver;
