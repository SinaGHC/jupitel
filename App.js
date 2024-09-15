import React, { Profiler } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // Navigation container for managing navigation state
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Creates a bottom tab navigator
import { Ionicons } from '@expo/vector-icons'; // Ionicons for rendering icons in the tab bar
import CreatePost from "./app/screens/CreatePost"; // Importing CreatePost screen
import Explore from "./app/screens/Explore"; // Importing Explore screen
import Profile from "./app/screens/Profile"; // Importing Profile screen

// Initialize the bottom tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // Wrap the navigator in a NavigationContainer to manage navigation state
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="CreatePost" // Set CreatePost as the default screen
        screenOptions={({ route }) => ({
          // Configure tab bar icons dynamically based on the route
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "CreatePost") {
              iconName = "create-outline"; // Icon for CreatePost
            } else if (route.name === "Profile") {
              iconName = "person-outline"; // Icon for Profile
            } else if (route.name === "Explore") {
              iconName = "compass-outline"; // Icon for Explore
            }
            return <Ionicons name={iconName} size={size} color={color} />; // Render the correct icon
          }, 
          // Customize the active/inactive tab colors
          tabBarActiveTintColor: 'tomato', // Active tab color
          tabBarInactiveTintColor: 'gray', // Inactive tab color
          
          // Customize bottom tab bar styles
          tabBarStyle: {
            backgroundColor: '#222222', // Set background color of the tab bar
          },
          
          // Customize the top header styles
          headerStyle: {
            backgroundColor: '#222222', // Set background color of the header
          },
          
          // Customize the header text color
          headerTintColor: 'white', // Set color of the header text
        })}
      >
        {/* Define the three screens for the bottom tab navigator */}
        <Tab.Screen name="Explore" component={Explore} /> 
        <Tab.Screen name="CreatePost" component={CreatePost} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Define styles for the container
const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the full height of the screen
  },
});
