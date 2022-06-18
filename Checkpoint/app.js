const init = () => {
    console.log("Window loaded");
    // Import the functions you need from the SDKs you need
  
    // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
  
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    let firebaseConfig = {
        apiKey: "AIzaSyBjoVWlma5A5Y9tMuyhpc2hrKGuupebLao",
        authDomain: "checkpoint-24738.firebaseapp.com",
        projectId: "checkpoint-24738",
        storageBucket: "checkpoint-24738.appspot.com",
        messagingSenderId: "150930494998",
        appId: "1:150930494998:web:75d086a88431d693bb8737"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    // const app = initializeApp(firebaseConfig);
    console.log(firebase.app().name); //DEFAULT
    // console.log(firebase.app().name);
  
}
  
  
  
window.onload = init;