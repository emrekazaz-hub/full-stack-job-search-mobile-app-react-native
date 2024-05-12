// LoginPage.js
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from 'react-native';
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
        <ImageBackground source={require('../Images/bg-orng.jpg')} style={{ height: '100%', width: '100%' }}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={styles.header}>Job Search App</Text>

                <View style={styles.form}>

                    <View>
                        <Text style={styles.labelText}>Name</Text>
                        <TextInput style={styles.input} placeholder='  Jhon Doe..' onChangeText={(text) => setUserInput({ ...userInput, name: text })} />
                    </View>

                    <View>
                        <Text style={styles.labelText}>Email</Text>
                        <TextInput style={styles.input} placeholder='  your@email.com' keyboardType='email-address' onChangeText={(text) => setUserInput({ ...userInput, email: text })} />
                    </View>

                    <View>
                        <Text style={styles.labelText}>Password</Text>
                        <TextInput style={styles.input} placeholder='  Password' onChangeText={(text) => setUserInput({ ...userInput, password: text })} />
                    </View>

                    <View style={{flexDirection: 'row', gap: 10}}>
                        <Text style={{ color: 'white' }}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{color: 'white'}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={styles.button} onPress={handleButton}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </ImageBackground>
    )
}

export default LoginPage;

const styles = StyleSheet.create({
    form: {
        width: '90%',
        justifyContent: 'center',
        paddingHorizontal: 25,
        gap: 15
    },
    header: {
        color: 'white',
        fontSize: 25
    },
    labelText: {
        color: 'white'
    },
    input: {
        justifyContent: "center",
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 10
    },
    button: {
        backgroundColor: 'orange',
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
})
