import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MealDetail({
  duration,
  complexity,
  affordability,
  textStyle,
  style,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailText, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailText, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailText, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 50,
    margin: 10,
  },
  detailText: {
    color: 'black',
    fontSize: 12,
    paddingHorizontal: 10,
  },
});
