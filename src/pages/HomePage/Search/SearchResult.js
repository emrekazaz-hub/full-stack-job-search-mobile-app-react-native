import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react';
import SearchResultCard from './SearchResultCard';
import { JobContext } from '../../Context/JobsContext';

const SearchResult = () => {

  const { searchInput, searchedJob } = useContext(JobContext);

  const click = () => {
    console.log('all searched jobs : ', searchedJob);
  }

  return (
    <View>
      <Text>Results for : {searchInput}</Text>

      <FlatList
        data={searchedJob}
        renderItem={({ item }) => <SearchResultCard item={item} />}
        keyExtractor={item => item.job_id}
        contentContainerStyle={{ rowGap: 16, alignItems: 'center' }}
      />
    </View>
  )
}

export default SearchResult;