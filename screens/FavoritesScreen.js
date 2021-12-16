import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MealList from '../component/MealList';
import {useSelector} from 'react-redux';
import DefaultText from '../component/DefaultText';

const FavoritesScreen = props => {
  const favoritesMealsList = useSelector(state => state.myMeals.favoritesMeals);
  const filteredMealsList = useSelector(state => state.myMeals.filteredMeals);

  if (favoritesMealsList.length === 0) {
    return (
      <View style={styles.viewStyle}>
        <DefaultText style={styles.textStyle}>
          No meals selected yet...
        </DefaultText>
      </View>
    );
  }
  const filteredFavoritesMeals = favoritesMealsList.filter(n => {
    return filteredMealsList.indexOf(n) !== -1;
  });
  return (
    <MealList listData={filteredFavoritesMeals} navigation={props.navigation} />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 26,
    color: 'black',
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
