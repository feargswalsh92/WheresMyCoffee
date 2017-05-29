import React from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';


const WheresMyCoffee = () => {
  return (
    <AppNavigator initialRoute={{ident: "Search"}}/>
  );
}

AppRegistry.registerComponent('WheresMyCoffee', () => WheresMyCoffee);
