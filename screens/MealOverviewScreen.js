import React from 'react';
import {useLayoutEffect} from 'react';

import {MEALS, CATEGORIES} from '../data/dummy-data';

import MealList from '../components/MealList/MealList';

export default function MealOverviewScreen({route, navigation}) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find(category => category.id === catId).title;

    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

  return <MealList displayedMeals={displayedMeals} />;
}
