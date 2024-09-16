import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";
import Button from "../components/Button";
import colors from "../config/colors";

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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
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
                <Input
                  placeholder="Username"
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                  style={styles.input}
                />
                {touched.username && errors.username && (
                  <Text style={styles.errorText}>{errors.username}</Text>
                )}

                <Input
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  style={styles.input}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <Input
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                  style={styles.input}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <Button
                  title="Sign Up"
                  onPress={handleSubmit}
                  style={styles.loginButton}
                />

                <Text
                  onPress={() => navigation.navigate("Signup")}
                  style={styles.signUpText}
                >
                  Have an account? Signup
                </Text>
              </View>
            )}
          </Formik>
        </ScrollView>
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
  scrollContainer: {
    flexGrow: 1,
  },
  form: {
    marginTop: 20,
    gap: 8,
  },
  input: {
    marginBottom: 10,
    backgroundColor: "#E0DFD3",
    color: colors.BLACK,
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
    marginBottom: 20,
    marginTop: 40,
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
  signUpButton: {
    alignItems: "center",
    marginTop: 10,
  },
  signUpText: {
    alignSelf: "center",
    marginTop: 10,
    textDecorationLine: "underline",
  },
});
