import axios from 'axios';
import { SERVER_URL } from "../config";

const headers = {
    headers: { Authorization: `JWT ${localStorage.getItem("user")}` }
};

export async function getHouses() {
    return axios.get(`${SERVER_URL}/houses`)
}

export async function getHousesId(id) {
    return axios.get(`${SERVER_URL}/houses/${id}`)
}

export async function getHousesUsers(id) {
    return axios.get(`${SERVER_URL}/houses/${id}/users`)
}

export async function putHousesUsers(id, user) {
    return axios.get(`${SERVER_URL}/houses/${id}/users`, {
        user
    })
}

export async function register({ name, adminId, password }) {
    return axios.post(`${SERVER_URL}/users`, {
        name,
        adminId,
        password
    })
}