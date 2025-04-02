import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Card(){
    return(
        <View style={styles.card}>
            <Text style={styles.cardText}>Cards</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        margin: 20,
        padding: "10rem",
        borderRadius: "2rem",
        backgroundColor: '#b07a7f',
        alignItems: 'center',
        width: "5rem",
    },
    cardText:{
        fontSize:28,
        color: 'white',
    }
});