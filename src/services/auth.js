import axios from 'axios';
import {SERVER_URL} from "../config";

const headers = {
    headers: { Authorization: "Bearer " + "token" }
};

export async function login(email, password) {
    return axios.post(`${SERVER_URL}/users/sign-in`, {
        email,
        password
    })
}

export async function register({email, password, username, passwordConf}) {
    return axios.post(`${SERVER_URL}/users`, {
        email,
        password, 
        username, 
        passwordConf
    })
}