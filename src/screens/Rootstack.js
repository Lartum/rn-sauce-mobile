import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ImageUploadScreen from './common/ImageUploadScreen';
import ComponentScreen from './common/ComponentScreen';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Component" component={ComponentScreen} />
      <Stack.Screen name="Image" component={ImageUploadScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
