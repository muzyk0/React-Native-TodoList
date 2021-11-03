import axios, { AxiosRequestConfig } from "axios";

const baseURL = "https://social-network.samuraijs.com/api/1.1/";
export const API_KEY = "5a0cdbca-9689-4621-a5f0-b22378b0e052";

const settings: AxiosRequestConfig = {
    baseURL,
    withCredentials: true,
    headers: {
        "API-KEY": API_KEY,
    },
};

export const instance = axios.create(settings);
