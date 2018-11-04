import firebase from 'firebase/app';

import 'firebase/auth';

const devConfig = {
    apiKey: "AIzaSyAsbxCcuyjKRzofKLwTcI1dUQe72WwV8KU",
    authDomain: "recipes-list-2b9dc.firebaseapp.com",
    databaseURL: "https://recipes-list-2b9dc.firebaseio.com",
    projectId: "recipes-list-2b9dc",
    storageBucket: "recipes-list-2b9dc.appspot.com",
    messagingSenderId: "905012140494"
};
const prodConfig = {
    apiKey: "AIzaSyAsbxCcuyjKRzofKLwTcI1dUQe72WwV8KU",
    authDomain: "recipes-list-2b9dc.firebaseapp.com",
    databaseURL: "https://recipes-list-2b9dc.firebaseio.com",
    projectId: "recipes-list-2b9dc",
    storageBucket: "recipes-list-2b9dc.appspot.com",
    messagingSenderId: "905012140494"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const auth = firebase.auth();

export {
    auth,
};
