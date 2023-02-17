import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Character from '../screen/character/Character';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screen/home/HomeScreen';
import CharactersScreen from '../screen/character/CharactersScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            elevation: 0,
            backgroundColor: 'green',
          },
          headerTitleAlign: "center",

        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CharactersScreen" options={{ title: "Character List" }} component={CharactersScreen} />
        <Stack.Screen name="Character" component={Character} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


