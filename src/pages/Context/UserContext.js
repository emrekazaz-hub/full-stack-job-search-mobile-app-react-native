import React, { useEffect, useState, useContext, createContext } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [signedUser, setSignedUser] = useState([]);
    const [isLogged, setIsLogged] = useState(false);
    const [foundedUser, setFoundedUser] = useState([])
    const [user, setUser] = useState({name: '', email: '', job: '', country: '', password: '', repassword: ''});

    useEffect(() => {
        const findUser = signedUser.find(userid => userid.id)
        if (findUser) {
            setFoundedUser(findUser);
        }
    }, [isLogged])


    const handleSignin = (email, password) => {
        fetch('http://192.168.0.20:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setSignedUser(data.user);
                    setIsLogged(true);
                }
                else if (data.status === 'noUser') {
                    alert('kullanici bulunamadi');
                }
                else {
                    console.log('frontend kullaniciyi alamadi')
                }
            })
            .catch(err => console.log('fetch isleminde hata meydana geldi : ', err))
    }

    const handleSignUp = (values) => {
        console.log('fonksiyona gelen values : ', values)
        fetch('http://192.168.0.20:3000/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: values.name,
                email: values.email,
                country: values.country,
                job: values.job,
                password: values.password
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.status === 'userFound'){
                console.log('boyle bir kullanici zaten mevcut')
            }else if(data.status === 'userAdded'){
                setIsLogged(true);
                setSignedUser(data.newUser)
            }
            
        })
    } 


    const values = {
        isLogged,
        setIsLogged,
        user,
        signedUser,
        setSignedUser,
        handleSignin,
        setFoundedUser,
        foundedUser,
        setUser,
        user,
        handleSignUp,
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }

