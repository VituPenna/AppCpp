import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const AppStack = createStackNavigator();

import home from './pages/home';
import PBarb from './pages/PBarb';
import PBiblic from './pages/PBiblic';
import CCP from './pages/CCP';
import PCond from './pages/PCond';
import PGarg from './pages/PGarg';
import PLoj from './pages/PLoj';
import CV from './pages/CV';
import Cont from './pages/Cont';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }} >
        <AppStack.Screen name="home" component={home} />
        <AppStack.Screen name="PBarb" component={PBarb} />
        <AppStack.Screen name="PBiblic" component={PBiblic} />
        <AppStack.Screen name="CCP" component={CCP} />
        <AppStack.Screen name="PCond" component={PCond} />
        <AppStack.Screen name="PGarg" component={PGarg} />
        <AppStack.Screen name="PLoj" component={PLoj} />
        <AppStack.Screen name="CV" component={CV} />
        <AppStack.Screen name="Cont" component={Cont} />
        
              
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
