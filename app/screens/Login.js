import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";

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
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Pressable style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>

          <Pressable
            style={styles.signUpButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.signUpText}>Have an account? Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  sContainer: {
    flex: 1,
    backgroundColor: "#DBCAAB",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 20,
  },
  form: {
    marginTop: 20,
    gap: 10,
  },
  input: {
    backgroundColor: "#E0DFD3",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  headerText: {
    alignSelf: "center",
    fontWeight: "600",
    fontSize: 30,
    marginBottom: 40,
    marginTop: 70,
  },
  loginButton: {
    backgroundColor: "#D65651",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 60,
  },
  signUpButton: {
    alignItems: "center",
  },
  signUpText: {
    color: "grey",
    fontWeight: "600",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
