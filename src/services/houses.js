import axios from 'axios';
import { SERVER_URL } from "../config";
import { headers } from "../helpers"


export async function getHouses() {
    return axios.get(`${SERVER_URL}/houses`, headers)
}

export async function getHousesId(id) {
    return axios.get(`${SERVER_URL}/houses/${id}`, headers)
}

export async function getHousesUsers(id) {
    return axios.get(`${SERVER_URL}/houses/${id}/users`, headers)
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