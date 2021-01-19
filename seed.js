const firebaseConfig = require("./config")
const firebase = require("firebase")
const DATA_USERS = require("./data")

require("firebase/firestore")

const COLLECTION_NAME = "users"

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

DATA_USERS.forEach(user => {
    db.collection(COLLECTION_NAME).add(user).then(docRef => {
        console.log(`Document added with ID : ${docRef.data}`)
    })
})