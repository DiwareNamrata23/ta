// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Frontpage from './components/Frontpage';
import Wishlist from './components/Wishlist';
import Notification from './components/Notification';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Frontpage">
        <Stack.Screen name="Frontpage" component={Frontpage} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
