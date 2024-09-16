import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Profile from './Profile';




const Drawer = createDrawerNavigator();

export default function DrawerApp() {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
        }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
}