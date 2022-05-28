const init = () => {
    console.log('Window Loaded');
    // Import the functions you need from the SDKs you need
    //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDCVLPnS03j7riiX-OKmJ8Ik9IU8miHMng",
        authDomain: "fir-test-83543.firebaseapp.com",
        projectId: "fir-test-83543",
        storageBucket: "fir-test-83543.appspot.com",
        messagingSenderId: "958445472861",
        appId: "1:958445472861:web:cf8a38897c61aa360711b4"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.log(firebase.app().name);

}







window.onload = init;