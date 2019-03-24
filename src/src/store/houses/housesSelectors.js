export const getHousesList = state => state.houses.houses;
export const getTemplatesList = state => state.houses.templates;
export const getCurrentTemplate = state => state.houses.currentTemplate;

export const getHousesLoadingStatus = state => state.houses.loading.houses;
export const getTemplatesLoadingStatus = state => state.houses.loading.templates;

export const getHousesLoadingError = state => state.houses.loadingErrors.houses;
export const getTemplatesLoadingError = state => state.houses.loadingErrors.templates;
