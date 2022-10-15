import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export default function CategoryGridTile({title, color, onPress}) {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [styles.button, pressed ? styles.pressed : null]}
        onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.textItem}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textItem: {
    fontWeight: 'bold',
    color: '#24180f',
    fontSize: 18,
  },
});
