import React from "react";
import { StyleSheet,  } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // Navigation container for managing navigation state
import TabNavigation from "./app/navigation/tabNavigation";

export default function App() {
  return (
    <NavigationContainer>
     <TabNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
