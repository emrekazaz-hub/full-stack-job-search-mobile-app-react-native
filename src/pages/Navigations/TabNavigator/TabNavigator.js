import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { StackNavigator, SettingsStackNavigator } from '../StackNavigator/StackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="HomeTab" component={StackNavigator}
                options={{
                    title: 'HOME',
                    tabBarActiveTintColor: 'black',
                    tabBarActiveBackgroundColor: '#cfcdcc',
                    tabBarIcon: () => (
                        <Ionicons name="home-outline" size={25} color={'black'} />
                    )
                }}
            />
            <Tab.Screen name="SettingsTab" component={SettingsStackNavigator}
                options={{
                    title: 'Settings',
                    tabBarActiveTintColor: 'black',
                    tabBarActiveBackgroundColor: '#cfcdcc',
                    tabBarIcon: () => (
                        <Ionicons name="settings-outline" size={25} color={'black'} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;