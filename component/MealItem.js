import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import DefaultText from './DefaultText';

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground
              source={{uri: props.image}}
              style={styles.bgImageStyle}>
              <View style={styles.titlecontainer}>
                <Text style={styles.titleStyle} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetails}}>
            <DefaultText>{props.duration} m</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '90%',
    backgroundColor: '#f500ff',
    margin: 8,
    marginLeft: 16,
    borderRadius: 14,
    overflow: 'hidden'
  },
  titlecontainer: {padding: 4, backgroundColor: 'rgba(0,0,0,0.5)'},
  titleStyle: {
    fontSize: 18,
    color: 'white',

    fontFamily: 'OpenSans-BoldItalic',
    textAlign: 'center',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bgImageStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
});

export default MealItem;
