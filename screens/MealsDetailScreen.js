import React from 'react';
import {useLayoutEffect} from 'react';
import {Text, StyleSheet, ScrollView, Image} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import Subtitle from '../components/Subtitle';
import List from '../components/List';
import IconButton from '../components/IconButton';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../store/redux/favorites';

export default function MealsDetailScreen({route, navigation}) {
  const mealId = route.params.mealId;

  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const isFavoriteMeal = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (isFavoriteMeal) {
      dispatch(removeFavorite({id: mealId}));
    } else {
      dispatch(addFavorite({id: mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={isFavoriteMeal ? 'star' : 'star-outline'}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
  return (
    <ScrollView
      style={styles.rootContainer}
      showsVerticalScrollIndicator={false}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        affordability={selectedMeal.affordability}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 23,
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
});
