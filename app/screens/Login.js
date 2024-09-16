import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import Input from "../components/Input"; 
import Button from "../components/Button"; 

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/pngtree-3d-jupiter-planet-illustration-png-image_9199326.png")}
      />
      <View style={styles.sContainer}>
        <Text style={styles.headerText}>Welcome</Text>
        <View style={styles.form}>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <Button
            title="Login"
            onPress={handleLogin}
            style={styles.loginButton}
          />
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={styles.signUpText}
          >
            Have an account? Signup
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK,
  },
  sContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 20,
  },
  form: {
    marginTop: 20,
    gap: 10,
  },
  input: {
    marginBottom: 10,
    backgroundColor: "#E0DFD3",
  },
  headerText: {
    alignSelf: "center",
    fontWeight: "600",
    fontSize: 30,
    marginBottom: 40,
    marginTop: 70,
  },
  loginButton: {
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 60,
  },
  signUpText: {
    alignSelf: "center",
    marginTop: 10,
    textDecorationLine: "underline",
  },
});
