import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {MEALS} from '../data/dummy-data';
import MealList from '../components/MealList/MealList';

export default function FavoritesScreen() {
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

  const displayedMeals = MEALS.filter(meal =>
    favoriteMealIds.includes(meal.id),
  );
  if (displayedMeals.length <= 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No favorite meal is added yet. </Text>
      </View>
    );
  } else {
    return <MealList displayedMeals={displayedMeals} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  emptyText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
