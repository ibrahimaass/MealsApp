import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {CATEGORIES} from '../data/Dummy_data';
import CategoryGridTiles from '../component/CategoryGridTiles';

const CategoriesScreen = props => {

  const renderGridItems = itemData => {
    return (
      <CategoryGridTiles
        title={itemData.item.title}
        color={itemData.item.color}
        onClick={() => {
          props.navigation.navigate('CategoriesMeal', {
            catId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItems}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  categoryItemsStyle: {
    flex: 1,
    padding: 10,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
