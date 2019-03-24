import { string, number, arrayOf, shape } from 'prop-types';


export const houseInterface = {
  id:           number,
  images:       arrayOf(string),
  full_address: string,
  price:        number,
  area:         number,
};

export const templateInterface = {
  id: number,
  template: arrayOf(shape({
    component:  string,
    field:      string,
  })),
};

export const housesInterface = arrayOf(shape(houseInterface));
export const templatesInterface = arrayOf(shape(templateInterface));
