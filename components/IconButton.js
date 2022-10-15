import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function IconButton({name, color, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => (pressed ? styles.pressed : null)}>
      <Icon name={name} color={color} size={24} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
