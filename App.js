/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Tabs from './navigtion/BottomTabsNavigation';
import PlantDetail from './screens/plantDetail';
import SimplePlantDetail from './screens/simplePlantDetail';


const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors :{
    ...DefaultTheme.colors,
    border:'transparent'
  }
}

const App = () => {
  return (
    <NavigationContainer
      theme={theme}
    >
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="PlantDetail" component={PlantDetail} />
        <Stack.Screen name="SimplePlantDetail" component={SimplePlantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
