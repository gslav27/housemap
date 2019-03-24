import { DB } from '_Utils_/constants/constants';
import * as types from './housesActionTypes';


export const getHouses = () => ({
  type: types.GET_HOUSES,
  callAPI: `${DB.URL}/${DB.COLLECTIONS.houses}`,
  options: { method: 'GET' },
});

export const getTemplates = () => ({
  type: types.GET_TEMPLATES,
  callAPI: `${DB.URL}/${DB.COLLECTIONS.templates}`,
  options: { method: 'GET' },
});

export const setCurrentTemplate = template => ({
  type: types.SET_CURRENT_TEMPLATE,
  payload: template,
});
