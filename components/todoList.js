import React from "react";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../redux/actions/actions";

let todo = "";

const TodoList = ({ todos, addTodo, toggleTodo }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: "http://yoctotta.com/decor.jpg" }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        opacity: 0.4,
      }}
    ></Image>
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        style={{ width: "100%" }}
        data={todos}
        keyExtractor={(item) => `Key-${item.id}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                toggleTodo(item.id);
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
          addTodo(todo);
        }}
      ></Button>
    </View>

    <StatusBar style="auto" />
  </View>
);

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps, {
  addTodo: addTodo,
  toggleTodo: toggleTodo,
})(TodoList);

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
