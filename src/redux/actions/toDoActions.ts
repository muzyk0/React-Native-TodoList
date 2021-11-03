import { API_KEY, instance } from "../../api/axios-instance";

export const getTodo = () => async (dispatch) => {
    try {
        // const res = await instance.get("todo-lists");
        // dispatch({
        //     type: "ADD_TODO",
        //     payload: res,
        // });
    } catch (error) {}
};

export const deleteTodo = (data) => async (dispatch) => {
    try {
        // const res = await instance.delete("URL");
        // dispatch({
        //     type: "ADD_TODO",
        //     payload: res,
        // });
    } catch (error) {}
};
