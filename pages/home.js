import React from "react";
import { StyleSheet } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer"
import { View } from "react-native-web";


export default function Home(){
    return(
        <View style={styles.container}>
            <Header />
            <Card />
            <Footer/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
    }
})


