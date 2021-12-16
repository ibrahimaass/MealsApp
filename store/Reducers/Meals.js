import {MEALS} from '../../data/Dummy_data';
import {TOGGLE_FAVORITE, TOGGLE_FILTERS} from '../Actions/Meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoritesMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoritesMeals.findIndex(
        meal => meal.id === action.mealId,
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoritesMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favoritesMeals: updatedFavMeals};
      } else {
        const meal = state.meals.find(m => m.id === action.mealId);
        return {...state, favoritesMeals: state.favoritesMeals.concat(meal)};
      }
    case TOGGLE_FILTERS:
      const appliedFilters = action.filters;
      const updatedFiltersMeals = state.meals.filter(meal => {
        if (!meal.isGlutenFree && appliedFilters.gluten) return false;
        if (!meal.isLactoseFree && appliedFilters.lactoseFree) return false;
        if (!meal.isVegan && appliedFilters.vegan) return false;
        if (!meal.isVegetarian && appliedFilters.vegetarian) return false;
        return true;
      });
      return {...state, filteredMeals: updatedFiltersMeals};
    default:
      return state;
  }
};

export default mealsReducer;
