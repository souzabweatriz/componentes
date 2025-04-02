import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Footer(){
    return(
        <View style={styles.footer}>
            <Text style={styles.footerText}>Todos os direitos reservados</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    footer:{
        backgroundColor: "#b97b7f",
        width: "auto",
        height: "10rem",
        alignItems: "center",
        justifyContent: "center",

    },
    footerText:{
        fontSize:28,
        color: "#fff4f8",
    }
})