import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MealDetail from '../MealDetail';

export default function MealItem({
  mealItemId,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function mealItemPressHandler() {
    navigation.navigate('MealDetail', {
      mealId: mealItemId,
    });
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [styles.button, pressed ? styles.pressed : null]}
        onPress={mealItemPressHandler}>
        <View style={styles.innerContainer}>
          <Image source={{uri: imageUrl}} style={styles.imageStyle} />
          <Text style={styles.itemText}>{title}</Text>
        </View>
        <MealDetail
          duration={duration}
          complexity={complexity}
          affordability={affordability}
          textStyle={styles.detailText}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    overflow: 'hidden',
    backgroundColor: 'white',
  },

  innerContainer: {
    borderRadius: 8,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.5,
  },

  imageStyle: {
    width: '100%',
    height: 200,
  },

  itemText: {
    fontWeight: 'bold',
    color: '#24180f',
    fontSize: 18,
  },
});
