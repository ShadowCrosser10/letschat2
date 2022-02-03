// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDJcDutV5mYxLlpOjgBkXZywVuEAmPcBfE",
  authDomain: "letschat-fb115.firebaseapp.com",
  projectId: "letschat-fb115",
  storageBucket: "letschat-fb115.appspot.com",
  messagingSenderId: "747140754108",
  appId: "1:747140754108:web:ce54a1ef0ed902c1ad7eb9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();