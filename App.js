import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function DrawerHandler() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
          sceneContainerStyle: {backgroundColor: '#1c1c1c'},
          drawerContentStyle: {backgroundColor: '#1c1c1c'},
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#1c1c1c',
          drawerActiveBackgroundColor: 'grey',
        }}>
        <Drawer.Screen
          name="AllCategories"
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
            drawerIcon: ({color, size}) => (
              <Icon name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <Icon name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: 'black'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#1c1c1c'},
            }}>
            <Stack.Screen
              name="MealsCategories"
              component={DrawerHandler}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealOverviewScreen} />
            <Stack.Screen
              name="MealDetail"
              component={MealsDetailScreen}
              options={{
                title: 'About the meal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180f',
  },
});
