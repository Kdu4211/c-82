import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Feed from '../screens/feed';
import CreatePost from '../screens/CreatPost';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CriarPost" component={CreatePost} />
        </Tab.Navigator>
    );
}



const styles = styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundeColor: "#0000FF	",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
})

export default BottomTabNavigator