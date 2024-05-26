// LoginPage.js
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { Formik } from 'formik';
import LoginValidations from './LoginValidations';
import { Button } from 'react-native';
import { object, string, ref } from 'yup';

const SignUpPage = ({ navigation }) => {
    const { isLogged, setIsLogged, user, setUser, handleSignUp } = useContext(UserContext);

    const handleLogin = (values) => {
        setIsLogged(true);
        setUser(values);
        console.log('Login successful:', user);
        navigation.navigate('HomeStack');
    };

    const handleGuest = () => {
        navigation.navigate('HomeStack');
    };

    const signUpValidations = object({
        name: string().required(),
        email: string().email().required(),
        country: string().required(),
        job: string().required(),
        password: string().min(8).required(),
        repassword: string().oneOf([ref("password")]).required(),
    });

    return (
        <ImageBackground source={require('../Images/bg-orng.jpg')} style={{ height: '100%', width: '100%', alignItems: 'center' }}>
            <View>
                <Image source={require('../Images/login2.png')} style={{ height: 150, width: 200 }} />
            </View>

            <View style={styles.form}>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        country: '',
                        job: '',
                        password: '',
                        repassword: '',
                    }}
                    onSubmit={(values) => (
                        handleSignUp(values),
                        alert('hesabiniz basariyla olusturuldu'),
                        navigation.navigate('Login')
                    )
                    }
                    validationSchema={signUpValidations}
                >
                    {({ values, touched, errors, handleChange, handleSubmit, handleBlur }) => (
                        <View style={styles.form}>

                            <View>
                                <Text style={styles.text}>Name</Text>
                                <TextInput
                                    placeholder='John Doe'
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                    style={styles.input}
                                />
                                {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
                            </View>

                            <View>
                                <Text style={styles.text}>Email</Text>
                                <TextInput
                                    placeholder='example@gmail.com'
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    style={styles.input}
                                />
                                {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
                            </View>

                            <View>
                                <Text style={styles.text}>Region</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Your country'
                                    onChangeText={handleChange('country')}
                                    onBlur={handleBlur('country')}
                                    value={values.country}
                                />
                                {touched.country && errors.country && <Text style={styles.error}>{errors.country}</Text>}
                            </View>

                            <View>
                                <Text style={styles.text}>Job</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='What are you looking for?'
                                    onChangeText={handleChange('job')}
                                    onBlur={handleBlur('job')}
                                    value={values.job}
                                />
                                {touched.job && errors.job && <Text style={styles.error}>{errors.job}</Text>}
                            </View>

                            <View>
                                <Text style={styles.text}>Password</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Your secret'
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                />
                                {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
                            </View>

                            <View>
                                <Text style={styles.text}>Re Password</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Your secret'
                                    onChangeText={handleChange('repassword')}
                                    onBlur={handleBlur('repassword')}
                                    value={values.repassword}
                                />
                                {touched.repassword && errors.repassword && <Text style={styles.error}>{errors.repassword}</Text>}
                            </View>

                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <Text style={styles.btnText}>Do you have an account?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                    <Text style={styles.btnText}>Login</Text>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity onPress={handleSubmit} style={styles.btnStyle}>
                                    <Text style={styles.btnText}>Sign Up</Text>
                                </TouchableOpacity>


                                <TouchableOpacity onPress={handleGuest}>
                                    <Text style={styles.btnText}>Continue as guest</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </ImageBackground >
    );
};

export default SignUpPage;

const styles = StyleSheet.create({
    form: {
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 25,
        gap: 10
    },
    input: {
        justifyContent: 'center',
        borderColor: 'black',
        backgroundColor: 'white'
    },
    text: {
        color: 'white',
        fontFamily: 'serif'
    },
    btnStyle: {
        backgroundColor: 'orange',
        width: 50,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'white'
    },
    error: {
        color: 'red',
        fontSize: 12,
    }
});
