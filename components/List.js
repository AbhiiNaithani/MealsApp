import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function List({data}) {
  return data.map(dataPoint => (
    <View key={dataPoint} style={styles.container}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    marginHorizontal: 35,
    marginVertical: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#fff2df',
  },
  itemText: {
    color: '#24180f',
    textAlign: 'center',
  },
});
