import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import RecetJobsCard from './RecetJobsCard'
import { JobContext } from '../../Context/JobsContext'
import SearchResultCard from '../Search/SearchResultCard'

const RecetJobs = () => {

  const { job } = useContext(JobContext);

  /*
    
    For Recent Jobs and Company Key:
    Every time the user clicks on a card (visits a company), we will set a state along with the click.
    This state will store the ID of the clicked company and save it to the database. 
    Thus, we will be able to show the last visited companies in the 'Recent Jobs' section.
  
    For popular jobs:
    It will display random companies in a way that suits the user with the help of a function
    that takes the company IDs stored by the user in the database and calculates
    the average areas of the companies belonging to these IDs.
  
    */

  return (
    <ScrollView>
      <Text>RecetJobs (We will calculate from backend later)</Text>

      <FlatList
        //data={recentJob}
        data={job}
        keyExtractor={item => item.job_id}
        //renderItem={({item}) => <RecetJobsCard item={item}/>}
        renderItem={({ item }) => <SearchResultCard item={item} />}
      />
    </ScrollView>
  )
}

export default RecetJobs;