import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import TodoItem from "../components/ToDoItem";

export default function OtherScreen() {
    const { todos } = useSelector<any, any>((state) => state.toDoReducer);

    return (
        <View>
            <Text>TODO CONT: {todos.length}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
