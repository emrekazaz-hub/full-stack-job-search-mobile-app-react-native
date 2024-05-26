import React, { useEffect, useContext, createContext, useState } from "react";
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import { UserContext } from "./UserContext";

const JobContext = createContext();

const JobContextProvider = ({ children }) => {

    const { foundedUser, signedUser } = useContext(UserContext);

    const navigation = useNavigation();
    const handleNavigateStack = (url) => {
        navigation.navigate(url)
    }

    const [job, setJob] = useState([]);
    const [searchedJob, setSearchedJob] = useState([]);
    const [allRecentJobs, setAllRecentJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState();
    const [company, setCompany] = useState('');
    const [searchInput, setSearchInput] = useState('');

    const [recentJob, setRecentJob] = useState([]);
    const [popularJob, setPopularJob] = useState([]);

    const fetchJobs = () => {
        const userId = signedUser[0].id;
        setLoading(true);
        fetch(`http://192.168.0.20:3000/job/search/nearby/${userId}`, {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
        })
          .then(res => res.json())
          .then(data => {
            if (data.status === 'success') {
              setJob(data.dataOfJobs);
            } else {
              console.log('Error:', data.message);
            }
            setLoading(false);
          })
          .catch(error => {
            console.error('Fetch error:', error);
            setLoading(false);
          });
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

    const handleRecentJob = (job_id,employer_name,job_title, job_city, job_country) => {
        const userId = signedUser[0].id;
        fetch(`http://192.168.0.20:3000/job/recent/${userId}`, {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                companyId: job_id,
                employer_name: employer_name,
                job_title: job_title,
                job_city: job_city,
                job_country: job_country
            })
        })
        .then(res => res.json())
        .catch(err => console.log('front veriyi alamadi', err))
    }

    const getRecentJobs = () => {
        const userId = signedUser[0].id;
        fetch(`http://192.168.0.20:3000/job/recent/byuser/4/${userId}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === 'success'){
                setRecentJob(data.company);
            }else{
                console.log('hata')
            }
        })
    }

    const getAllRecentJobs = () => {
        const userId = signedUser[0].id;
        fetch(`http://192.168.0.20:3000/job/recent/byuser/${userId}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === 'success'){
                setAllRecentJobs(data.company);
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
        recentJob,
        getAllRecentJobs,
    }

    return (
        <JobContext.Provider value={values}>
            {children}
        </JobContext.Provider>
    );
}

export { JobContext, JobContextProvider };