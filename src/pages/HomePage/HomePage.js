import React, { useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import DrawerNavigator from '../Navigations/DrawerNavigator/DrawerNavigator';
import Welcome from './Welcome/Welcome';
import Search from './Search/Search';
import PopularJobs from './PopularJobs/PopularJobs';
import RecetJobs from './RecentJobs/RecetJobs';
import { ImageBackground } from 'react-native';

const HomePage = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Welcome />
          </View>

          <View>
            <Search />
          </View>

          <View>
            <PopularJobs />
          </View>

          <View>
            <RecetJobs />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomePage;


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});