/**
 * transform 'template' configurations for <Card /> props
 * @param {[{}]} template configurations for <Card />
 */
export const getResolvedTemplate = template => ({
  addressTop: template[0].field === 'full_address',
  priceIsNested: !!template.find(({ field }) => field === 'images').children,
});
