import React from 'react';
import MealList from '../component/MealList';
import {useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import DefaultText from '../component/DefaultText';

const CategoryMealScreen = props => {
  const {catId} = props.route.params;
  const availableMeals = useSelector(state => state.myMeals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );
  if (displayedMeals.length === 0) {
    return (
      <View style={styles.viewStyle}>
        <DefaultText style={styles.textStyle}>
          No meals found, Please check your filters...
        </DefaultText>
      </View>
    );
  }
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 26,
    color: 'black',
  },
});
export default CategoryMealScreen;
