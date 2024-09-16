import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Explore from "../screens/Explore"; 
import Profile from "../screens/Profile"; 
import { Ionicons } from '@expo/vector-icons';
import CreatePost from "../screens/CreatePost";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="CreatePost"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "CreatePost") {
            iconName = "create-outline"; 
          } else if (route.name === "Profile") {
            iconName = "person-outline"; 
          } else if (route.name === "Explore") {
            iconName = "compass-outline"; 
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }, 
        tabBarActiveTintColor: 'tomato', 
        tabBarInactiveTintColor: 'gray', 
        tabBarStyle: {
          backgroundColor: '#222222', 
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
