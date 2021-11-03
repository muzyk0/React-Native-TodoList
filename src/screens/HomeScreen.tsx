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

export default function HomeScreen({ navigation }) {
    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const { todos } = useSelector<any, any>((state) => state.toDoReducer);

    // console.log(state);

    // const [data, setData] = useState("");

    // const getData = async () => {
    //     dispatch(getTodo());
    // };

    // useEffect(() => {
    //     getData();
    // }, []);

    const addToDo = async () => {
        const toAdd = { id: +Date.now(), value };
        value.length < 1
            ? alert("Empty Fields")
            : await dispatch({ type: "ADD_TODO", payload: toAdd });
        setValue("");
    };

    const deleteToDo = async (id) => {
        await dispatch({ type: "DELETE_TODO", payload: id });
    };

    const onHandle = async (value) => {
        navigation.navigate("ToDoDetails", { value });
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* <Text>TODOs: </Text> */}
                {todos?.map(({ id, value }) => {
                    return (
                        <TodoItem
                            key={id}
                            id={id}
                            todo={value}
                            onDelete={deleteToDo}
                            handle={onHandle}
                        />
                    );
                })}

                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={setValue}
                    placeholder={"Set value"}
                ></TextInput>
                <Button title="add todo" onPress={addToDo} />
                <Button
                    title="go to other"
                    onPress={() => navigation.navigate("Other")}
                />
            </ScrollView>
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
