import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ obj, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      onPress={() => onOpen(obj.id)}
      onLongPress={() => onRemove(obj.id)}
    >
      <View style={styles.component}>
        <Text>{obj.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  component: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
