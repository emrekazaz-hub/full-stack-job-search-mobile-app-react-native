import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../../HomePage/HomePage';
import ProfilePage from '../../ProfilePage/ProfilePage';
import { Button, TouchableOpacity, Text, Image } from 'react-native';
import SettingsPage from '../../SettingsPage/SettingsPage';
import LoginPage from '../../LoginPage/LoginPage';
import DrawerNavigator from '../DrawerNavigator/DrawerNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import Company from '../../HomePage/Company/Company';
import SearchResult from '../../HomePage/Search/SearchResult';
import SignUpPage from '../../LoginPage/SignUpPage';

const Stack = createNativeStackNavigator();

const bgImage = () => (
    <Image
        style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
        }}
        source={require('../../Images/bg-orng.jpg')}
        resizeMode="cover"
    />
);

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

function LoginStackNavi(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginPage} options={{ headerShown: false}}/>
            <Stack.Screen name='SignUp' component={SignUpPage} options={{ headerShown: false}}/>
        </Stack.Navigator>
    )
}

function StackNavigator() {

    const { signedUser } = useContext(UserContext);

    return (
        <Stack.Navigator initialRouteName='LoginStack'>

            <Stack.Screen name='LoginStack' component={LoginStackNavi} options={{
                title: 'WooX',
            }} />

            <Stack.Screen
                name="HomeStack"
                component={HomePage}
                options={({ navigation }) => ({
                    headerTitle: '',
                    headerBackground: bgImage,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => {
                            navigation.openDrawer();
                        }}>
                            <Ionicons name="list-outline" size={25} color={'white'} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("ProfileStack")}>
                            <Ionicons name='person-circle-outline' size={25} color={'white'} />
                        </TouchableOpacity>

                    )
                })}

            />

            <Stack.Screen
                name='Company'
                component={Company}
                options={() => ({
                    title: 'Company Name',
                    headerTintColor: 'white',
                    headerBackground: bgImage
                })}
            />

            <Stack.Screen
                name='SearchResult'
                component={SearchResult}
                options={() => ({
                    title: 'Searched Companies',
                    headerTintColor: 'white',
                    headerBackground: bgImage
                })}
            />

            <Stack.Screen
                name="ProfileStack"
                component={ProfilePage}
                options={() => ({
                    title: 'Profile - User name',
                    headerTintColor: 'white',
                    headerBackground: bgImage
                })}
            />

        </Stack.Navigator>
    );
}

export { StackNavigator, SettingsStackNavigator };
