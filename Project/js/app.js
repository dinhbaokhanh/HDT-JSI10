const firebaseApp = firebase.initializeApp({
    /* Firebase config */
    apiKey: "AIzaSyDsBJQpYxOr1uP__V_9-OgFF1VF7pKxyj0",
    authDomain: "vietnam-food-cc57c.firebaseapp.com",
    projectId: "vietnam-food-cc57c",
    storageBucket: "vietnam-food-cc57c.appspot.com",
    messagingSenderId: "607104677947",
    appId: "1:607104677947:web:19a4a6cb97b7181681c41e"
});
const database = firebaseApp.firestore();
const auth = firebaseApp.auth();