import React, { useEffect, useContext, createContext, useState } from "react";
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const JobContext = createContext();

const JobContextProvider = ({ children }) => {

    const navigation = useNavigation();
    const handleNavigateStack = (url) => {
        navigation.navigate(url)
    }

    const [job, setJob] = useState([]);
    const [searchedJob, setSearchedJob] = useState([]);
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState();
    const [company, setCompany] = useState('');
    const [searchInput, setSearchInput] = useState('');

    const fetchJobs = () => {
        setLoading(true);
        fetch('http://192.168.0.18:3000/job/search/nearby')
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setJob(data.dataOfJobs)
                    setLoading(false);
                    console.log('popular job verisi : ', job);
                } else {
                    console.log('err')
                }
            })
    }

    const searchJobs = () => {
        setLoading(true)
        fetch('http://192.168.0.18:3000/job/search', {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                searchInput: searchInput
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.status === 'success'){
                setSearchedJob(data.dataOfJobs)
                setLoading(false);
                console.log('backendden gelen veri : ', searchedJob);
            }else{
                console.log('cannot get the searched values from backend')
            }
        })
}

const values = {
    handleNavigateStack,
    job,
    fetchJobs,
    loading,
    company,
    setCompany,
    searchInput,
    setSearchInput,
    searchJobs
}

return (
    <JobContext.Provider value={values}>
        {children}
    </JobContext.Provider>
);
}

export { JobContext, JobContextProvider };