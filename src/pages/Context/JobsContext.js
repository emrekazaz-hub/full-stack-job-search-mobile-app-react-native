import React, { useEffect, useContext, createContext, useState } from "react";
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import { UserContext } from "./UserContext";

const JobContext = createContext();

const JobContextProvider = ({ children }) => {

    const { foundedUser } = useContext(UserContext);

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

    const [recentJob, setRecentJob] = useState([]);
    const [popularJob, setPopularJob] = useState([]);

    const fetchJobs = () => {
        setLoading(true);
        fetch('http://192.168.0.20:3000/job/search/nearby')
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setJob(data.dataOfJobs)
                    setLoading(false);
                } else {
                    console.log('err')
                }
            })
    }

    const searchJobs = () => {
        setLoading(true)
        fetch('http://192.168.0.20:3000/job/search', {
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
                if (data.status === 'success') {
                    setSearchedJob(data.dataOfJobs)
                    setLoading(false);
                } else {
                    console.log('cannot get the searched values from backend')
                }
            })
    }

    const handleRecentJob = (companyid) => {
        const userId = foundedUser.id;
        fetch(`http://192.168.0.20:3000/job/recent/${userId}`, {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                companyId: companyid
            })
        })
        .then(res => res.json())
        .catch(err => console.log('front veriyi alamadi', err))
    }

    const getRecentJobs = () => {
        const userId = foundedUser.id;
        fetch(`http://192.168.0.20:3000/job/recent/byuser/${userId}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === 'success'){
                setRecentJob(data.company);
            }else{
                console.log('hata')
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
        searchJobs,
        searchedJob,
        handleRecentJob,
        getRecentJobs,
        recentJob
    }

    return (
        <JobContext.Provider value={values}>
            {children}
        </JobContext.Provider>
    );
}

export { JobContext, JobContextProvider };