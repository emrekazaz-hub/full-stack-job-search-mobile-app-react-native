import { View, Text, StyleSheet } from 'react-native'
import React from 'react';

const SettingsPage = () => {
  return (
    <View style={styles.center}>
      <Text>SettingsPage</Text>
    </View>
  )
}

export default SettingsPage;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});