//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBkPZmUJnV-hl8iJ0E9vmxI4_xtlN6ukNY",
    authDomain: "social-project-76d6b.firebaseapp.com",
    databaseURL: "https://social-project-76d6b-default-rtdb.firebaseio.com",
    projectId: "social-project-76d6b",
    storageBucket: "social-project-76d6b.appspot.com",
    messagingSenderId: "1067002355357",
    appId: "1:1067002355357:web:80dc35e6c6a68538483e74"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
getData();