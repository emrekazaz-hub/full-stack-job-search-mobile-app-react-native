import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import RecetJobsCard from './RecetJobsCard'
import { JobContext } from '../../Context/JobsContext'
import SearchResultCard from '../Search/SearchResultCard'

const RecetJobs = () => {

  const { job } = useContext(JobContext);

  const handleClick = () => {
    console.log('tiklanan butondan cikan job verileri', job)
  }

  return (
    <ScrollView >
      <View style={styles.titleRecent}>
        <Text style={{ fontSize: 20, fontFamily: 'serif', paddingBottom: 10 }}>Recent Jobs</Text>
        <TouchableOpacity onPress={handleClick}>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewRecentJobs}>
        <FlatList
          // data={job}
          data={[1, 2, 3, 4, 5, 6]}
          keyExtractor={item => item.job_id}
          //renderItem={({item}) => <RecetJobsCard item={item}/>}
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