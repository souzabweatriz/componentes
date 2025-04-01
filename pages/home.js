import React from "react";
import { StyleSheet } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";


export default function Home(){
    return(
        <Header />
    )
}

const styles = StyleSheet.create({
    view:{
        backgroundColor: 'rgb(29, 40, 75)',
    },
});
