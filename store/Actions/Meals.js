export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const TOGGLE_FILTERS = 'TOGGLE_FILTERS';

export const toggleFavorite = id => {
  return {type: TOGGLE_FAVORITE, mealId: id};
};

export const toggleFilters = filtersData => {
  return {type: TOGGLE_FILTERS, filters: filtersData};
};