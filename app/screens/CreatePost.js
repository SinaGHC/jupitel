import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, TextInput, Pressable, StatusBar, ScrollView, TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
  const [name, setName] = useState(""); 
  const [description, setDescription] = useState(""); 
  const [tags, setTags] = useState([]);
  const [picture, setPicture] = useState(""); 
  const [tagInput, setTagInput] = useState(""); 

  const addTag = () => {
    if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);  // chera
      setTagInput(""); 
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerText}>Create Space</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName} 
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description"
          placeholderTextColor="#888"
          multiline
          numberOfLines={4} 
          value={description}
          onChangeText={setDescription} 
        />

        <TextInput
          style={styles.input}
          placeholder="Picture URL"
          placeholderTextColor="#888"
          value={picture}
          onChangeText={setPicture} 
        />

        <View style={styles.tagsContainer}>
          <TextInput
            style={[styles.input, styles.tagInput]}
            placeholder="Enter a tag"
            placeholderTextColor="#888"
            value={tagInput}
            onChangeText={setTagInput} 
            onSubmitEditing={addTag} 
          />
          <TouchableOpacity onPress={addTag} style={styles.addTagButton}>
            <Text style={styles.addTagButtonText}>Add Tag</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.tagsList}>
          {tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
              <TouchableOpacity onPress={() => removeTag(tag)}>
                <Text style={styles.removeTagText}>x</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <Pressable style={styles.createButton} onPress={() => console.log({ name, description, tags, picture })}>
          <Text style={styles.createButtonText}>Create Space</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222", 
  },
  scrollContainer: {
    paddingHorizontal: 20, 
    paddingVertical: 40,
  },
  headerText: {
    alignSelf: "center",
    fontWeight: "600",
    fontSize: 30,
    color: "#FFF",
    marginBottom: 40,
  },
  input: {
    backgroundColor: "#333333", 
    color: "#FFF", 
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8, 
    fontSize: 16,
    marginBottom: 20, 
  },
  textArea: {
    height: 100, 
    textAlignVertical: 'top', 
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tagInput: {
    flex: 1,
  },
  addTagButton: {
    backgroundColor: "#D65651",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginLeft: 10,
    marginBottom: 21
  },
  addTagButtonText: {
    color: "#FFF",
    fontWeight: "600",
  },
  tagsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: "#333333",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagText: {
    color: "#FFF",
    fontSize: 16,
  },
  removeTagText: {
    color: "#D65651",
    fontWeight: "600",
    marginLeft: 10,
  },
  createButton: {
    backgroundColor: "#D65651", 
    paddingVertical: 15, 
    borderRadius: 10, 
    alignItems: "center", 
    marginTop: 20, 
  },
  createButtonText: {
    color: "#FFF", 
    fontWeight: "600",
    fontSize: 18,
  },
});
