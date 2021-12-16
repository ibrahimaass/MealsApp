import React from 'react';
import MealsNavigator from './navigation/MealsNavigator';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import mealsReducer from './store/Reducers/Meals';

const rootReducer = combineReducers({
  myMeals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
