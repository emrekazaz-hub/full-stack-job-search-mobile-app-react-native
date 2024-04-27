import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react';
import TabNavigator from '../Navigations/TabNavigator/TabNavigator';
import { UserContext } from '../Context/UserContext';

const ProfilePage = () => {

  const { isLogged, signedUser } = useContext(UserContext);

  useEffect(() => {
    console.log('giris yapan kullanici : ', signedUser)
  },[])

  return (
    <View style={styles.center}>
      <Text>{isLogged ? `Hosgeldin ${JSON.stringify(signedUser)}` : 'Lutfen Giris Yapiniz'}</Text>
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