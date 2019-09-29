import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDPda-6j8huG7cCLb0D73SM7UxX38gO0zY",
    authDomain: "comentaki-jpapp.firebaseapp.com",
    databaseURL: "https://comentaki-jpapp.firebaseio.com",
    projectId: "comentaki-jpapp",
    storageBucket: "",
    messagingSenderId: "753503782579",
    appId: "1:753503782579:web:6da1456c5fad399bde92c6"
}

firebase.initializeApp(firebaseConfig)

export default firebase