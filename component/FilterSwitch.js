import React from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.title}>{props.label}</Text>
      <Switch
        trackColor={{true: 'blue'}} //body
        thumbColor={'black'} // circle
        value={props.value}
        onValueChange={props.onChangeValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginVertical: 4,
    padding: 5,
  },
  title: {
    fontFamily: 'OpenSans-BoldItalic',
    fontSize: 16,
  },
});
export default FilterSwitch;
