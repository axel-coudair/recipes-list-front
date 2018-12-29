import axios from 'axios';
import { SERVER_URL } from "../config";

const headers = {
    headers: { Authorization: `JWT ${localStorage.getItem("user")}` }
};

export async function getRecipesFromUser(id) {
    return axios.get(`${SERVER_URL}/recipes/user/${id}`, headers)
}

export async function postRecipe({
    title,
    description,
    isPublic,
    userId,
    numberOfEaters,
    image,
    date,
    duration,
    stapes,
    ingredients }) {
    return axios.post(`${SERVER_URL}/recipes`, {
        title,
        description,
        isPublic,
        userId,
        numberOfEaters,
        image,
        date,
        duration,
        stapes,
        ingredients
    }, headers)
}