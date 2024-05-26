import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react';
import TabNavigator from '../Navigations/TabNavigator/TabNavigator';
import { UserContext } from '../Context/UserContext';
import { JobContext } from '../Context/JobsContext';

const ProfilePage = () => {

  const { isLogged, foundedUser, signedUser } = useContext(UserContext);
  const { getRecentJobs, recentJob } = useContext(JobContext);


  useEffect(() => {
    getRecentJobs();
  }, [])

  return (
    <View style={styles.center}>
      <Text>{isLogged ? `Hosgeldin ${signedUser[0].name}` : 'Lutfen Giris Yapiniz'}</Text>
      <Text>kullanicinin company bilgileri :</Text>
      <View>
        {recentJob.map((job, index) => (
          <View key={index}>
            <Text>{job.job_name}</Text>
            <Text>{job.job_title}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default ProfilePage;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});