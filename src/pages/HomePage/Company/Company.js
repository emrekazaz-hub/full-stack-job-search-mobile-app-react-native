import { View, Text, TouchableOpacity, StyleSheet, Image, useWindowDimensions, ScrollView, ImageBackground } from 'react-native'
import React, { useContext, useState, useEffect } from 'react';
import { JobContext } from '../../Context/JobsContext';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const Company = ({ }) => {
  const { company } = useContext(JobContext);

  const handleClick = () => {
    console.log('company logo : ', company)
  }

  const About = () => (
    <ScrollView style={{ flex: 1 }}>
      <Text style={styles.tabBarText}>We are: {company.employer_name}</Text>
      <Text style={styles.tabBarText}>Our Web: {company.employer_website}</Text>
      <Text style={styles.tabBarText}>City: {company.job_city}</Text>
      <Text style={styles.tabBarText}>Country: {company.job_country}</Text>
    </ScrollView>
  );

  const Details = () => (
    <ScrollView style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <Text style={styles.tabBarText}>
        {company.job_description}
      </Text>
    </ScrollView>
  );

  const Requirements = () => (
    <ScrollView style={{ flex: 1, backgroundColor: '#fafafa' }}>
      {company.job_highlights.Qualifications?.map((requirement, index) => (
        <Text key={index} style={styles.tabBarText}>
          {requirement}
        </Text>
      ))}
    </ScrollView>
  );

  const Apply = () => (
    <ScrollView style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <Text style={styles.tabBarText}>Job apply links :</Text>
      {company.apply_options.map((apply, index) => (
        <View key={index} style={styles.tabBarText}>
          <Text>{apply.publisher}</Text>
          <Text>{apply.apply_link}</Text>
        </View>
      ))}
    </ScrollView>
  );

  const renderScene = SceneMap({
    about: About,
    details: Details,
    req: Requirements,
    apply: Apply
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'about', title: 'About Us' },
    { key: 'details', title: 'Job Details' },
    { key: 'req', title: 'Job Requirements' },
    { key: 'apply', title: 'Apply' },
  ]);

  return (
    <View style={styles.container}>

      <View style={styles.companyUpside}>
        <ImageBackground source={require('./bg-orng.jpg')} style={{ height: '100%', width: '100%' }}>
          <View style={styles.topSideGroup}>
            <Image
              style={{ width: 60, height: 60 }}
              resizeMode='contain'
              source={{
                uri: company?.employer_logo
              }}
            />
            <Text style={styles.title}>{company.job_title}</Text>
            <Text style={styles.titleJob}>{company.employer_name}</Text>
          </View>

          <View style={styles.topBottomInfo}>
            <View style={styles.location}>
              <Text style={styles.textOfBottom}>{company.job_city}</Text>
              <Text style={styles.textOfBottom}>{company.job_country}</Text>
            </View>

            <View>
              <Text style={styles.textOfBottom}>Salary</Text>
              <Text style={styles.textOfBottom}>${company.job_min_salary}.000/year</Text>
            </View>

          </View>
        </ImageBackground>
      </View>


      <View style={styles.companyDownside}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={props =>
            <TabBar
              {...props}
              style={styles.tabBar}
              labelStyle={styles.tabLabel}
              indicatorStyle={styles.tabIndicator}
              activeColor='black'
            />
          }
        />
      </View>

    </View>
  )
}

export default Company;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  companyUpside: {
    flex: 0.5,
    backgroundColor: '#fff',
  },
  topSideGroup: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'serif',
    color: 'white',
    fontSize: 20
  },
  titleJob: {
    fontFamily: 'serif',
    color: 'white',
    fontSize: 15
  },
  location: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'serif'
  },
  topBottomInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  textOfBottom: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: 15
  },


  companyDownside: {
    flex: 1
  },
  tabBar: {
    backgroundColor: '#fafafa',
  },
  tabLabel: {
    color: 'black',
    textTransform: 'none',
    fontSize: 13,
  },
  tabIndicator: {
    backgroundColor: 'gray',
  },
  tabBarText: {
    paddingHorizontal: 20,
    paddingVertical: 20
  }
})