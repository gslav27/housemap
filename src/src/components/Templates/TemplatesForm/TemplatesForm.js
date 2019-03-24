import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { templatesInterface } from '_Utils_/types/interfaces';
import { houseDefaultData } from '_Utils_/types/defaultData';

import Card from '../../Cards/Card/index';

import styles from './TemplatesForm.styles';



const TemplatesForm = ({
  currentTemplateId,
  templates,
  onClose,
  onSelect,
  classes,
}) => {
  const [selectedTemplate, setType] = useState(currentTemplateId);

  return (
    < >
      <DialogContent>
        <Tabs
          value={selectedTemplate}
          onChange={(_, id) => setType(id)}
          textColor='secondary'
          centered
        >
          {
            templates.map(({ id }) => (
              <Tab
                key={id}
                value={id}
                label={`Card ${id}`}
              />
            ))
          }
        </Tabs>
        <div className={classes.sampleContainer}>
          <Card
            {...houseDefaultData}
            template={templates.find(({ id }) => id == selectedTemplate)}
            sample
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          color='secondary'
        >
          Cancel
        </Button>
        <Button
          onClick={() => onSelect(selectedTemplate)}
          color='secondary'
        >
          Save
        </Button>
      </DialogActions>
    </>
  );
};

TemplatesForm.propTypes = {
  templates:          templatesInterface.isRequired,
  currentTemplateId:  PropTypes.number.isRequired,
  onSelect:           PropTypes.func.isRequired,
  onClose:            PropTypes.func.isRequired,
  classes:            PropTypes.object.isRequired,
};

export default memo(withStyles(styles)(TemplatesForm));
