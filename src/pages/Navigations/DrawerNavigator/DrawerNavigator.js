import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TabNavigator from '../TabNavigator/TabNavigator';
import { SettingsStackNavigator } from '../StackNavigator/StackNavigator';
import LoginPage from '../../LoginPage/LoginPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { UserContext } from '../../Context/UserContext';
import { useRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {

  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Drawer.Screen name="HomeDraw" component={TabNavigator} />
      <Drawer.Screen name="SettingsDraw" component={SettingsStackNavigator} />
      <Drawer.Screen name='LoginStack' component={LoginPage} options={{
        title: 'Logout',
        drawerIcon: () => (
          <Ionicons name='exit-outline' size={25} color={'gray'} />
        )
      }} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
