import axios from 'axios';
import {SERVER_URL} from "../../config";

function login(email, password) {
    axios.post(`${SERVER_URL}/users/sign-in`, {
        email,
        password
    }).then((result, err ) =>{
        console.log(err)
        console.log(result)
    })
}
module.exports = {
    login
};