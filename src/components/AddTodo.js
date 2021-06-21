import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert, Keyboard } from "react-native";
import { THEME } from "../theme";
import { AntDesign} from '@expo/vector-icons'

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
      Keyboard.dismiss()
    } else {
      Alert.alert("Название задачи не может быть пустым");
    }
  };

  return (
    <View style={styles.component}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder="Введите название задачи"
        // autoCorrect={false}
      />
      <AntDesign.Button onPress={pressHandler} name='pluscircleo'> Add </AntDesign.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "60%",
    padding: 30,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
});
