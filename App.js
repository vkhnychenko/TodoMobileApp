import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, Alert } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";
import { THEME } from "./src/theme";

async function loadApplication() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    { id: "1", title: "Buy notebook" },
    { id: "2", title: "Learn React Native" },
  ]);

  if (!isReady)
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title, //ключ и значение совпадают
      },
    ]);
  };

  const removeTodo = (id) => {
    const obj = todos.find((t) => t.id === id);
    Alert.alert(
      "Remove element",
      `Confirm delete ${obj.title}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((obj) => obj.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const updateTodo = (id, title) => {
    setTodos((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId} //(id) => {setTodoId(id)}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((obj) => obj.id === todoId);
    content = (
      <TodoScreen
        onRemove={removeTodo}
        goBack={() => setTodoId(null)}
        obj={selectedTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <SafeAreaView>
      <Navbar title="Todo App" />
      <View style={styles.container}>{content}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});
