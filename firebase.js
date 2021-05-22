import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBjqVEGPNZMHi-k-IEl2T4CyQY1lSXqIjU",
	authDomain: "whatsapp-clone-20dc6.firebaseapp.com",
	projectId: "whatsapp-clone-20dc6",
	storageBucket: "whatsapp-clone-20dc6.appspot.com",
	messagingSenderId: "641880117935",
	appId: "1:641880117935:web:ddeb95e2ef87cabc733a5a",
	measurementId: "G-QY7D8ZH8DH",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
