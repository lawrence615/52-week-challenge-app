import firebase from 'firebase';

let database = null;

const init = () => {
    database = firebase.database();
};

const getRef = (path) => {
    return database.ref(path);
};

const getDb = () => {
    return database;
};

export default {init, getRef, getDb}