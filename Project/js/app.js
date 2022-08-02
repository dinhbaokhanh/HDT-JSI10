const init = () => {
    console.log("Window loaded");
    // Import the functions you need from the SDKs you need
    //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBsc9i_DKZeJzjdDQ9BmZdpDztbEPoLci0",
        authDomain: "vietnam-cuisine.firebaseapp.com",
        projectId: "vietnam-cuisine",
        storageBucket: "vietnam-cuisine.appspot.com",
        messagingSenderId: "122616938343",
        appId: "1:122616938343:web:141e7b87309954f05179c2"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    console.log(firebase.app().name); //DEFAULT
    // console.log(firebase.app().name);
}
  
  
  
window.onload = init;