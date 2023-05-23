import {StatusBar} from "expo-status-bar";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {TabNavigation} from "./navigations/Tab";
import {NavigationContainer, useTheme} from "@react-navigation/native";

import {Index} from "./screens/TabScreen";


export default function App() {
    const darkTheme = {
        backgroundColor: '#121212',
        textColor: '#ffffff',
    };
    let theme = useTheme();
    return (
        <>
            <StatusBar style="light"
                       translucent={true}
                       backgroundColor={"#121212"}
            />
            <NavigationContainer theme={theme}>
                <TabNavigation />
            </NavigationContainer>

        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
