import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>Aula de Mobile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "darkblue",
        width: "100%",
        height: "2rem",
        alignItems: "center",
        padding: "6rem"
    },
    headerText:{
        fontSize:28,
        color: "white",


    }
})