import React, {useCallback, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DefaultText from '../component/DefaultText';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../store/Actions/Meals';

const ListItem = props => {
  return (
    <View style={styles.listItemStyle}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen = props => {
  const {mealID} = props.route.params;
  const availableMeals = useSelector(state => state.myMeals.meals);
  const selectedMeal = availableMeals.find(meal => meal.id === mealID);

  const isFavoriteMeal = useSelector(state =>
    state.myMeals.favoritesMeals.some(meal => meal.id === mealID),
  );

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealID));
  }, [dispatch, mealID]);

  let myHeaderIcon = useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Icon
          name={isFavoriteMeal ? 'ios-star' : 'ios-star-outline'}
          color="red"
          size={25}
          onPress={toggleFavoriteHandler}
        />
      ),
    });
  });

  return (
    <ScrollView>
      {myHeaderIcon}
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration} m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(item => (
        <ListItem key={item}>{item}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(item => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'OpenSans-BoldItalic',
    fontSize: 30,
    textAlign: 'center',
  },
  listItemStyle: {
    padding: 10,
    margin: 5,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
  },
});

export default MealDetailsScreen;
