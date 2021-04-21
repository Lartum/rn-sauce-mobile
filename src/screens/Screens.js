import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './Rootstack';

export default function Screens() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
