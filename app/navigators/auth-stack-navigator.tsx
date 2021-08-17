import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from '../screens';
import {RegisterScreen} from '../screens';
import { AuthStackParamList } from './stack-param-list';

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="login"
    >
      <AuthStack.Screen name={'login'} component={LoginScreen}/>
      <AuthStack.Screen name={'register'} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}
