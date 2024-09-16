import React from "react";
import { TextInput, StyleSheet } from "react-native";
import colors from "../config/colors";

const Input = ({
  placeholder,
  value,
  onChangeText,
  multiline = false,
  numberOfLines = 1,
  onSubmitEditing,
  style
}) => {
  return (
    <TextInput
      style={[styles.input, multiline && styles.textArea, style]}
      placeholder={placeholder}
      placeholderTextColor="#888"
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      numberOfLines={numberOfLines}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#333333",
    color: colors.WHITE,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});

export default Input;
