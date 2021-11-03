import React from "react";
import {
    Button,
    StyleSheet,
    Text,
    View,
    Pressable,
    Platform,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";

export default function TodoItem({ id, todo, onDelete, handle }) {
    return (
        <TouchableOpacity onPress={() => handle(todo)}>
            {/* <ActivityIndicator /> */}
            <View style={styles.container}>
                <Text>TODO{todo}</Text>
                {/* <Button title="btn" /> */}
                <Pressable onPress={() => onDelete(id)} hitSlop={20}>
                    <Text>delete</Text>
                </Pressable>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 48,
        backgroundColor: "#f3f3f3",
        borderRadius: 10,
        margin: 10,
        paddingHorizontal: 10,
    },
});
