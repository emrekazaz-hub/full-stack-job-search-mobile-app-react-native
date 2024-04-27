// LoginPage.js
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';
import { Form, Formik } from 'formik';
import LoginValidations from './LoginValidations';
import { useRoute } from '@react-navigation/native';
import Card2 from '../HomePage/PopularJobs/Card2';

const LoginPage = ({ navigation }) => {

    const { isLogged, handleSignin } = useContext(UserContext);
    const router = useRoute();

    const [userInput, setUserInput] = useState([
        {
            name: '',
            email: '',
            password: '',
        }
    ])

    const handleButton = () => {
        if (!userInput.name || !userInput.email || !userInput.password) {
            alert('alanlar bos birakilmamali')
            return
        }

        handleSignin(userInput.name, userInput.email, userInput.password)
        if (isLogged) {
            navigation.navigate('HomeStack');
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>LoginPage</Text>

            <View style={styles.form}>

                <View>
                    <Text>Name</Text>
                    <TextInput style={styles.input} placeholder='Jhon Doe..' onChangeText={(text) => setUserInput({ ...userInput, name: text })} />
                </View>

                <View>
                    <Text>Email</Text>
                    <TextInput style={styles.input} placeholder='your@email.com' keyboardType='email-address' onChangeText={(text) => setUserInput({ ...userInput, email: text })} />
                </View>

                <View>
                    <Text>Password</Text>
                    <TextInput style={styles.input} placeholder='Password' onChangeText={(text) => setUserInput({ ...userInput, password: text })} />
                </View>

            </View>

            <TouchableOpacity style={styles.button} onPress={handleButton}>
                <Text>Login</Text>
            </TouchableOpacity>

            <Card2 />

        </View>
    )
}

export default LoginPage;

const styles = StyleSheet.create({
    form: {
        width: '90%',
        justifyContent: 'center',
        paddingHorizontal: 25,
    },
    input: {
        justifyContent: "center",
        borderColor: 'black',
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: 'orange',
        height: 20,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
