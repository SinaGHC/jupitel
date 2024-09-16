import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import colors from "../config/colors";

const CreatePost = ({ navigation }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [picture, setPicture] = useState("");
  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerText}>Create Space</Text>

        <Input placeholder="Name" value={name} onChangeText={setName} />

        <Input
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline={true}
          numberOfLines={4}
        />

        <Input
          placeholder="Picture URL"
          value={picture}
          onChangeText={setPicture}
        />

        <View style={styles.tagsContainer}>
          <Input
            placeholder="Enter a tag"
            value={tagInput}
            onChangeText={setTagInput}
            onSubmitEditing={addTag}
            style={styles.tagInput}
          />
          <Button
            title="Add Tag"
            onPress={addTag}
            style={styles.addTagButton}
          />
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

        <Button
          title="Create Space"
          onPress={() => console.log({ name, description, tags, picture })}
          style={styles.createButton}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePost;

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
    color: colors.WHITE,
    marginBottom: 40,
  },
  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  tagInput: {
    flex: 1,
  },
  tagsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  tag: {
    backgroundColor: "#333333",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  tagText: {
    color: colors.WHITE,
    fontSize: 16,
  },
  removeTagText: {
    color: colors.secondary,
    fontWeight: "600",
    marginLeft: 10,
  },
  addTagButton: {
    marginLeft: 10,
    marginBottom: 21,
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 8,
  },
  createButton: {
    marginTop: 20,
  },
});
