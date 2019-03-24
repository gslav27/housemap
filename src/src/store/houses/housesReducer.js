import { templateDefaultData } from '_Utils_/types/defaultData';

import * as types from './housesActionTypes';
import { SUCCESS, START, FAIL } from '../actionTypes';



const initialState = {
  houses: [],
  templates: [templateDefaultData],
  currentTemplate: templateDefaultData,
  loading: {
    houses: false,
    templates: false,
  },
  loadingErrors: {
    houses: false,
    templates: false,
  },
};



export default function (state = initialState, { type, payload }) {
  switch (type) {
    // START REQUESTS----------------------------------------------
    case (types.GET_HOUSES + START):
      return {
        ...state,
        loading: { ...state.loading, houses: true },
        loadingErrors: { ...state.loadingErrors, houses: false },
      };
    case (types.GET_TEMPLATES + START):
      return {
        ...state,
        loading: { ...state.loading, templates: true },
        loadingErrors: { ...state.loadingErrors, templates: false },
      };

    // SUCCESS REQUESTS----------------------------------------------
    case (types.GET_HOUSES + SUCCESS):
      return {
        ...state,
        houses: payload.data,
        loading: { ...state.loading, houses: false },
      };
    case (types.GET_TEMPLATES + SUCCESS):
      return {
        ...state,
        templates: payload,
        loading: { ...state.loading, templates: false },
      };

    // FAIL REQUESTS------------------------------------------------
    case (types.GET_HOUSES + FAIL):
      return {
        ...state,
        loading: { ...state.loading, houses: false },
        loadingErrors: { ...state.loadingErrors, houses: true },
      };
    case (types.GET_TEMPLATES + FAIL):
      return {
        ...state,
        loading: { ...state.loading, templates: false },
        loadingErrors: { ...state.loadingErrors, templates: true },
      };

    // OTHER ACTIONS -----------------------------------------------
    case (types.SET_CURRENT_TEMPLATE):
      return {
        ...state,
        currentTemplate: (payload === state.currentTemplate.id)
          ? state.currentTemplate
          : state.templates.find(({ id }) => id == payload),
      };
    default:
      return state;
  }
}
