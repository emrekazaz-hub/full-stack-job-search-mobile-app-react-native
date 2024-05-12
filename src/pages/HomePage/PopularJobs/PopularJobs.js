import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { JobContext } from '../../Context/JobsContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import PopularJobsCard from './PopularJobsCard';
import { ActivityIndicator } from 'react-native';

const PopularJobs = () => {

  const { job, fetchJobs, loading } = useContext(JobContext);

  const handleClick = () => {
    console.log('tiklanan butondan cikan job verileri', job)
  }

/*
  useEffect(() => {
    fetchJobs();
  },[])
*/

  return (
    <View style={{ paddingLeft: 20 }}>
      <View style={styles.popularJobsHeader}>
        <Text style={{ fontSize: 20, fontFamily: 'serif', paddingBottom: 10 }}>Popular Jobs</Text>
        <TouchableOpacity onPress={handleClick}>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>

      <View>
        {loading ? (
          <ActivityIndicator size="large" color="orange" />
        ) : job === null ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            //data={job}
            data={[1,2,3,4,5,6]}
            renderItem={({ item }) => <PopularJobsCard item={item} />}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: 16 }}
            horizontal
          />
        )}
      </View>

    </View>
  )
}

export default PopularJobs;

const styles = StyleSheet.create({
  popularJobsHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingRight: 20,
  }
})