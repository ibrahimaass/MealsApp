import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FilterSwitch from '../component/FilterSwitch';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {toggleFilters} from '../store/Actions/Meals';

const FiltersScreen = props => {
  const [isGluten, setIsGluten] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      gluten: isGluten,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(toggleFilters(appliedFilters));
    alert('Your Edit Saved...');
  }, [isGluten, isLactoseFree, isVegan, isVegetarian, dispatch]);

  let mySaveIcon = useEffect(() =>
    props.navigation.setOptions({
      headerRight: () => (
        <Icon
          style={styles.iconStyle}
          name="save"
          size={30}
          color="yellow"
          onPress={saveFilters}
        />
      ),
    }),
  );

  return (
    <View style={styles.screen}>
      {mySaveIcon}
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        value={isGluten}
        onChangeValue={v => setIsGluten(v)}
      />
      <FilterSwitch
        label="Lactose-Free"
        value={isLactoseFree}
        onChangeValue={v => setIsLactoseFree(v)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChangeValue={v => setIsVegan(v)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChangeValue={v => setIsVegetarian(v)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-BoldItalic',
    color: 'blue',
    fontSize: 20,
    marginBottom: 10,
  },
  iconStyle: {
    marginRight: 14,
  },
});

export default FiltersScreen;
