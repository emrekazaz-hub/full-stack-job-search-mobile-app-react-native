import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { JobContext } from '../../Context/JobsContext';

const Search = () => {

  const { setSearchInput, searchJobs, handleNavigateStack } = useContext(JobContext);

  const handleSubmit = () => {
    //searchJobs();
    handleNavigateStack('SearchResult')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.seatchHeader}>Find your perfect job</Text>
      <View style={styles.searchGroup}>
        <TextInput style={styles.textInput} placeholder='Search for your job..' onChangeText={(text) => setSearchInput(text)}/>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Ionicons name='search-outline' size={20} color={'white'}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Search;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 20
    },
    seatchHeader: {
        fontSize: 20,
        fontFamily: 'serif'
    },
    searchGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        gap: 15
    },
    textInput: {
      paddingLeft: 10,
        backgroundColor: 'white',
        width: '85%'
    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 5,
    }
})