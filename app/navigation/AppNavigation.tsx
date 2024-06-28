import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationRoute } from '../constants';
import HomeScreen from '../module/Home/HomeScreen';

const Stack = createNativeStackNavigator();
// create a component
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NavigationRoute.HOME}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={NavigationRoute.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default AppNavigation;
