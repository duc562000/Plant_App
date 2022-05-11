import React from "react";
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";

import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();


const CameraButton = () => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: COLORS.primary,
            }}
        >
            <Image
                source={require('../assets/icons/camera.png')}
                resizeMode="contain"
                style={{
                    width: 23,
                    height: 23
                }}
            />
        </View>
    );
};

const Tabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: "10%",
                },
            }}
            screenOptions={({ route }) => ({
                tabBarStyle: { 
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,
                    elevation: 24,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    backgroundColor: '#fff',
                    bottom: 0,
                    padding: 10,
                    width: '100%',
                    height: 84,
                    zIndex: 0,
                },
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={require('../assets/icons/flash_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "Box":
                            return (
                                <Image
                                    source={require('../assets/icons/cube_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "Camera":
                            return (
                                <CameraButton />
                            );
                        case "Search":
                            return (
                                <Image
                                    source={require('../assets/icons/search_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "Favourite":
                            return (
                                <Image
                                    source={require('../assets/icons/heart_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Box"
                component={Home}
            />
            <Tab.Screen
                name="Camera"
                component={Home}
            />
            <Tab.Screen
                name="Search"
                component={Home}
            />
            <Tab.Screen
                name="Favourite"
                component={Home}
            />
        </Tab.Navigator>
    );
};

export default Tabs;