import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import RecetJobsCard from './RecetJobsCard'
import { JobContext } from '../../Context/JobsContext'
import SearchResultCard from '../Search/SearchResultCard'

const RecetJobs = () => {

  const { recentJob, getRecentJobs } = useContext(JobContext);

  const handleClick = () => {
    console.log('tiklanan butondan cikan job verileri', job)
  }

  useEffect(() => {
    getRecentJobs()
  }, [])

  return (
    <ScrollView >
      <View style={styles.titleRecent}>
        <Text style={{ fontSize: 20, fontFamily: 'serif', paddingBottom: 10 }}>Last Jobs You Looked At</Text>
        <TouchableOpacity onPress={handleClick}>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewRecentJobs}>
        <FlatList
          data={recentJob}
          keyExtractor={item => item.job_id}
          renderItem={({ item }) => <SearchResultCard item={item} />}
          contentContainerStyle={styles.listRecent}
        />
      </View>
    </ScrollView>
  )
}

export default RecetJobs;

const styles = StyleSheet.create({
  viewRecentJobs: {
    alignItems: 'center',
    paddingBottom: 20
  },
  listRecent: {
    gap: 20
  },
  titleRecent: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20
  }
})