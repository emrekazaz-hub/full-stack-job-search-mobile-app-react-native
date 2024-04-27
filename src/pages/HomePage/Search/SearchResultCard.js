import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';

const SearchResultCard = ({ item }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>Job title : {item?.employer_name}</Text>
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
        justifyContent: "space-between",
        shadowColor: "#F3F4F8",
    },
})

