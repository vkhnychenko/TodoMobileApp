import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
import { THEME } from "../theme";

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2
  );

  useEffect(() => {
    const update = () =>
      setDeviceWidth(
        Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2
      );
    Dimensions.addEventListener("change", update);

    return () => {
      Dimensions.removeEventListener("change", update);
    };
  });

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      <View style={{ width: deviceWidth }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={todos}
          renderItem={({ item }) => (
            <Todo obj={item} onRemove={removeTodo} onOpen={openTodo} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
