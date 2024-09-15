import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/pngtree-3d-jupiter-planet-illustration-png-image_9199326.png")}
      />
      <View style={styles.sContainer}>
        <Text style={styles.headerText}>Welcome</Text>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#999"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              {touched.username && errors.username && (
                <Text style={styles.errorText}>{errors.username}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <Pressable style={styles.loginButton} onPress={handleSubmit}>
                <Text style={styles.loginButtonText}>Login</Text>
              </Pressable>

              <Pressable
                style={styles.signUpButton}
                onPress={() => navigation.navigate("Signup")}
              >
                <Text style={styles.signUpText}>
                  Don't have an account? Sign up
                </Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default SignUp;

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
  errorText: {
    color: "red",
    fontSize: 14,
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
