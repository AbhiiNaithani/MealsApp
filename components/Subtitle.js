import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Subtitle({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#fff2df',
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 35,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff2df',
    textAlign: 'center',
  },
});
