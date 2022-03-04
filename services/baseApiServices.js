import axios from "axios";
import { DOMAIN, USER_LOGIN } from "../utils/settings/config";


const api = axios.create({
    baseURL: DOMAIN
});

api.interceptors.request.use(function (config) {
    config.headers.token = localStorage.getItem(USER_LOGIN) ? JSON.parse(localStorage.getItem(USER_LOGIN)).token : null;
    return config;
}, function (error) {
    return Promise.reject(error);
});


export default api;