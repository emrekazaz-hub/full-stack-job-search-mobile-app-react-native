import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react';
import { Image } from 'react-native';
import { JobContext } from '../../Context/JobsContext';
import defaultLogo from '../PopularJobs/amazon6707.jpg';
import Styles from '../../Styles/Styles.js';

const SearchResultCard = ({ item }) => {

    const { company, setCompany, handleNavigateStack, handleRecentJob } = useContext(JobContext);

    const checkImageURL = (url) => {
        if (url === null) {
            return defaultLogo;
        }
        else {
            return url;
        }
    };

    const openCompany = () => {
        setCompany(item)
        handleNavigateStack('Company')
        handleRecentJob();
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

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Text style={styles.companyName} numberOfLines={1}>
                        {item.employer_name}
                    </Text>
                    <Text style={styles.companyName}>
                        {item.job_title}
                    </Text>
                </View>

                <Text>
                    {item.job_city}/{item.job_country}
                </Text>
            </View>

        </TouchableOpacity>
    )
}

export default SearchResultCard;

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 150,
        padding: 24,
        backgroundColor: 'white',
        borderRadius: 16,
        justifyContent: "space-around",
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
    companyName: {
        fontSize: 16,
        color: "#B3AEC6",
        marginTop: 12,
    },

})
