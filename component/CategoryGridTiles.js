import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

const CategoryGridTiles = props => {
  let MyTouch = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    MyTouch = TouchableNativeFeedback;
  }
  return (
    <View style={styles.categoryItemsStyle}>
      <MyTouch style={{flex: 1}} onPress={props.onClick}>
        <View
          style={{...styles.viewContainer, ...{backgroundColor: props.color}}}>
          <Text style={styles.textTitle} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </MyTouch>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItemsStyle: {
    flex: 1,
    margin: 15,
    height: 150,
    overflow: 'hidden',
  },
  viewContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  textTitle: {
    fontSize: 16,
    fontFamily: 'OpenSans-BoldItalic',
    textAlign: 'right',
  },
});

export default CategoryGridTiles;
