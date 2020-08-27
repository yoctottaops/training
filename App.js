import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

let todo = "";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Default todo", done: false },
  ]);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "http://yoctotta.com/decor.jpg" }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          opacity: 0.4,
        }}
      ></Image>
      <View style={{ flex: 1, width: "100%" }}>
        <FlatList
          style={{ width: "100%" }}
          data={todoList}
          keyExtractor={(item) => `Key-${item.id}`}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setTodoList(
                    todoList.map((l) =>
                      l.id === item.id ? { ...l, ["done"]: !l.done } : l
                    )
                  );
                }}
              >
                <Text style={item.done ? styles.doneItem : styles.item}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      </View>

      <View style={{ flex: 1, width: "90%" }}>
        <TextInput
          style={styles.input}
          onChangeText={(e) => (todo = e)}
        ></TextInput>
        <Button
          title="Add"
          onPress={() => {
            setTodoList([
              ...todoList,
              { id: todoList.length + 1, name: todo, done: false },
            ]);
          }}
        ></Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
  },
  item: {
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    width: "100%",
    borderRadius: 40,
  },
  doneItem: {
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    width: "100%",
    borderRadius: 40,
    textDecorationLine: "line-through",
    color: "red",
    backgroundColor: "rgba(0,80,0,0.4)",
  },
  input: {
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    borderRadius: 40,
  },
});
