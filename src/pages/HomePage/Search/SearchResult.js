import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react';
import SearchResultCard from './SearchResultCard';
import { JobContext } from '../../Context/JobsContext';
import { ActivityIndicator } from 'react-native';

const SearchResult = () => {

  const { searchInput, searchedJob, loading } = useContext(JobContext);

  const click = () => {
    console.log('Biz NE ALDIK : ', searchedJob);
  }

  return (
    <View>
      {
        loading ?
          <ActivityIndicator size={'large'} color={'orange'} />
          :
          <View>
            <FlatList
              data={searchedJob}
              //data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}
              renderItem={({ item }) => <SearchResultCard item={item} />}
              keyExtractor={item => item.job_id}
              contentContainerStyle={{ rowGap: 16, alignItems: 'center', paddingBottom: 60, paddingTop: 15 }}
            />
          </View>
      }

    </View>
  )
}

export default SearchResult;