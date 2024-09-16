import React from "react";
import { StyleSheet,  } from "react-native";
import Signup from "./app/screens/Signup";

export default function App() {
  return (
    <Signup/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
