const firebaseApp = firebase.initializeApp({
    /* Firebase config */
    apiKey: "AIzaSyBsc9i_DKZeJzjdDQ9BmZdpDztbEPoLci0",
    authDomain: "vietnam-cuisine.firebaseapp.com",
    projectId: "vietnam-cuisine",
    storageBucket: "vietnam-cuisine.appspot.com",
    messagingSenderId: "122616938343",
    appId: "1:122616938343:web:141e7b87309954f05179c2"
});
const database = firebaseApp.firestore();
const auth = firebaseApp.auth();