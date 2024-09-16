/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/component/screens/Home';
import Profiles from './src/component/screens/Profile';
import MyDrawer from './src/component/screens/MyDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
       screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen
          name="Home"
          component={MyDrawer}
        // options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={Profiles} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};



export default App;
