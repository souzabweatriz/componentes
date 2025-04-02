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
        backgroundColor: "#955157",
        width: "auto",
        height: "20vh",
        alignItems: "center",
        justifyContent: "center"

    },
    headerText:{
        fontSize:28,
        color: "#fff4f8",
    }
})