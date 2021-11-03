import React, { useEffect, useState } from "react";
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Switch,
    ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../components/ToDoItem";
import { getTodo } from "../redux/actions/toDoActions";

export default function ToDoDetails({ route }) {
    const value = route.params.value;
    return (
        <View style={styles.container}>
            <Text>ToDoDetails: {value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    input: {
        color: "black",
        height: 48,
        backgroundColor: "#fefe",
        borderRadius: 10,
        margin: 10,
        paddingHorizontal: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
});
