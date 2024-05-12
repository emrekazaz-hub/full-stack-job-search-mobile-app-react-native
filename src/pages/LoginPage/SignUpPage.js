// LoginPage.js
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';
import { Formik } from 'formik';
import LoginValidations from './LoginValidations';

const SignUpPage = ({ navigation }) => {

    const { isLogged, setIsLogged } = useContext(UserContext);

    const handleLogin = () => {
        setIsLogged(true);
        navigation.navigate('HomeStack')
    }

    const handleGuest = () => {
        navigation.navigate('HomeStack')
    }

    return (
        <ImageBackground source={require('../Images/bg-orng.jpg')} style={{ height: '100%', width: '100%', alignItems: 'center'}}>

            <View>
                <Image source={require('../Images/login2.png')} style={{ height: 150, width: 200}}/>
            </View>

            <View style={styles.form}>

                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                    }}
                    onSubmit={(values) => {
                        setUser(values);
                        myFunc();
                    }}
                    validationSchema={LoginValidations}
                >
                    {
                        ({ values, touched, errors, handleChange, handleSubmit, handleBlur }) =>
                            <>
                                <View>
                                    <Text>Name</Text>
                                    <TextInput
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                        style={styles.input}
                                    />
                                </View>

                                <View>
                                    <Text>Email</Text>
                                    <TextInput
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        style={styles.input}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <Text>Do you have an account?</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                        <Text>Login</Text>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <TouchableOpacity onPress={handleLogin}>
                                        <Text>Login</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={handleGuest}>
                                        <Text>Continue as guest</Text>
                                    </TouchableOpacity>
                                </View>


                            </>
                    }

                </Formik>

            </View>

        </ImageBackground>
    )
}

export default SignUpPage;

const styles = StyleSheet.create({
    form: {     
        width: '90%',
        justifyContent: 'center',
        paddingHorizontal: 25,
        backgroundColor: 'gray'
    },
    input: {
        justifyContent: "center",
        borderColor: 'black',
        backgroundColor: 'white'
    },
})
