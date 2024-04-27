import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../../HomePage/HomePage';
import ProfilePage from '../../ProfilePage/ProfilePage';
import { Button, TouchableOpacity, Text } from 'react-native';
import SettingsPage from '../../SettingsPage/SettingsPage';
import LoginPage from '../../LoginPage/LoginPage';
import DrawerNavigator from '../DrawerNavigator/DrawerNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import Company from '../../HomePage/Company/Company';
import SearchResult from '../../HomePage/Search/SearchResult';

const Stack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Settings' component={SettingsPage}
                options={({ navigation }) => (
                    {
                        title: '',
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Ionicons name='list-outline' size={25} color={'black'} />
                            </TouchableOpacity>
                        )
                    }
                )}
            />
        </Stack.Navigator>
    );
}

function StackNavigator() {

    const { signedUser } = useContext(UserContext);
    
    return (
        <Stack.Navigator initialRouteName='LoginStack'>

            <Stack.Screen name='LoginStack' component={LoginPage} options={{
                title: 'Login Screen'
            }} />

            <Stack.Screen
                name="HomeStack"
                component={HomePage}
                options={({ navigation }) => ({
                    headerTitle: '',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => {
                            navigation.openDrawer();
                        }}>
                            <Ionicons name="list-outline" size={25} color={'black'} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("ProfileStack")}>
                            <Ionicons name='person-circle-outline' size={25} />
                        </TouchableOpacity>

                    )
                })}
            />

            <Stack.Screen 
            name='Company'
            component={Company}
            />

            <Stack.Screen 
            name='SearchResult'
            component={SearchResult}
            />

            <Stack.Screen
                name="ProfileStack"
                component={ProfilePage}
                options={{ title: signedUser.name }}
            />

        </Stack.Navigator>
    );
}

export { StackNavigator, SettingsStackNavigator };
