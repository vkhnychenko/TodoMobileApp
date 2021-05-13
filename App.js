import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    {id: '1', title: 'Buy notebook'},
    {id: '2', title: 'Learn React Native'}
  ]); // переменные назваем как хотим

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    // setTodos(todos.concat([ newTodo ]))

    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title, //ключ и значение совпадают
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((obj) => obj.id !== id));
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
    const selectedTodo = todos.find(obj => obj.id === todoId)
    content = <TodoScreen goBack={() => setTodoId(null)} obj={selectedTodo} />;
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
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
