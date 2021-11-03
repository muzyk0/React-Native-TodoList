import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import OtherScreen from "./src/screens/OtherScreen";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import ToDoDetails from "./src/screens/ToDoDetails";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerShown: true, headerTitle: "TODO's" }}
                    />
                    <Stack.Screen name="Other" component={OtherScreen} />
                    <Stack.Screen name="ToDoDetails" component={ToDoDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
