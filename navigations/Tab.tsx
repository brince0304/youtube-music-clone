import {Index} from "../screens/TabScreen";
import React from "react";
import HeaderRight from "../components/HeaderRight";
import {NavigationContainer} from "@react-navigation/native";
import {MaterialIcons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Logo} from "../ui/Logo";


export const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    const basicOptions = {
        headerStyle: {
            backgroundColor: "#121212",
            shadowColor: "transparent",
        },
        headerTitle: "",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#999999",
        tabBarStyle: {
            backgroundColor: "#222222",
        },


    };
    return (
        <Tab.Navigator
            initialRouteName={"홈"}
        >
            <Tab.Screen name="홈" component={Index}
                        options={{
                            headerShown: false,
                            title: "홈",
                            ...basicOptions,
                            tabBarIcon: ({focused, color, size}) => (
                                <MaterialIcons name="home" size={24} color="white"/>
                            ),

                        }}
            />
        </Tab.Navigator>
    );
};

