// LoginPage.js
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
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
        <View style={{ flex: 1, alignItems: 'center' }}>

            <Text>LoginPage</Text>

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


                                <TouchableOpacity
                                    onPress={() => handleSubmit(console.log(values))}
                                >
                                    <Text>Submit</Text>
                                </TouchableOpacity>
                            </>
                    }
                </Formik>

            </View>

            <TouchableOpacity onPress={handleLogin}>
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleGuest}>
                <Text>Continue as guest</Text>
            </TouchableOpacity>

        </View>
    )
}

export default SignUpPage;

const styles = StyleSheet.create({
    form: {
        flex: 0.5,
        width: '90%',
        justifyContent: 'center',
        paddingHorizontal: 25
    },
    input: {
        justifyContent: "center",
        borderColor: 'black',
        backgroundColor: 'white'
    },
})
