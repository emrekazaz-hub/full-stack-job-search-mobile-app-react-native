import React, { useEffect, useState, useContext, createContext } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [signedUser, setSignedUser] = useState([]);
    const [isLogged, setIsLogged] = useState(false);
    const [foundedUser, setFoundedUser] = useState([])
    const [user, setUser] = useState([
        {
            id: 1,
            name: 'emre',
            email: 'emre@gmail.com',
            password: 'emre',
        },
        {
            id: 2,
            name: 'emre2',
            email: 'emre2@gmail.com',
            password: 'emre2',
        },
        {
            id: 3,
            name: 'emre3',
            email: 'emre3@gmail.com',
            password: 'emre3',
        }
    ]);

    useEffect(() => {
        const findUser = signedUser.find(userid => userid.id)
        if (findUser) {
            setFoundedUser(findUser);
        }
    }, [isLogged])


    const handleSignin = (name, email, password) => {
        fetch('http://192.168.0.20:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setSignedUser(data.user);
                    setIsLogged(true);
                    return (name, email, password === '')
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



    const values = {
        isLogged,
        setIsLogged,
        user,
        signedUser,
        setSignedUser,
        handleSignin,
        setFoundedUser,
        foundedUser,
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }

