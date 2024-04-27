import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useEffect, useContext } from 'react';
import { JobContext } from '../../Context/JobsContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import defaultLogo from './amazon6707.jpg';
import Company from '../Company/Company';
import { useNavigation } from '@react-navigation/native';

const PopularJobsCard = ({ item }) => {

    const { setCompany, handleRecentJob } = useContext(JobContext);
    const navigation = useNavigation();

    const checkImageURL = (url) => {
    if (url === null){
        return defaultLogo;
    }
    else {
        return url;
    }
};

const openCompany = () => {
    setCompany(item)
    navigation.navigate('Company')
    handleRecentJob(item.job_id)
}

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={openCompany}
        >
            <TouchableOpacity style={styles.logoContainer}>
            <Image
                    source={checkImageURL(item?.employer_logo)}
                    src={item?.employer_logo}
                    resizeMode='contain'
                    style={styles.logoImage}
                />
            </TouchableOpacity>
            <Text style={styles.companyName} numberOfLines={1}>
                {item.employer_name}
            </Text>

            <View style={styles.infoContainer}>
                <Text style={styles.jobName} numberOfLines={1}>
                    {item.job_title}
                </Text>
                <View style={styles.infoWrapper}>
                    <Text style={styles.publisher}>
                        {item?.job_publisher} -
                    </Text>
                    <Text style={styles.location}> {item.job_country}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};


export default PopularJobsCard;

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 200,
        padding: 24,
        backgroundColor: 'white',
        borderRadius: 16,
        justifyContent: "space-between",
        shadowColor: "#F3F4F8",
    },
    logoContainer: {
        width: 50,
        height: 50,
        backgroundColor: "#F3F4F8",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    logoImage: {
        width: "70%",
        height: "70%",
    },
    infoContainer: {
        marginTop: 20,
    },
    companyName: {
        fontSize: 16,
        color: "#B3AEC6",
        marginTop: 12,
    },
    jobName: {
        fontSize: 20,
        color: "FFF"
    },
    infoWrapper: {
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    publisher: {
        fontSize: 14,
        color: "FFF"
    },
    location: {
        fontSize: 14,
        color: "#B3AEC6",
    },
})