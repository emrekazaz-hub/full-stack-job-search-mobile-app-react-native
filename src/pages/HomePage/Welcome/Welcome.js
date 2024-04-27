import { View, Text, StyleSheet } from 'react-native'
import React, {useContext} from 'react';
import { UserContext } from '../../Context/UserContext';

const Welcome = () => {

  const { signedUser } = useContext(UserContext);
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hello  {signedUser[0].name} !</Text>
    </View>
  )
}

export default Welcome;


const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 10
  },
  welcomeText: {
    color: 'gray',
    fontSize: 20,
    fontFamily: 'serif'
  }
})