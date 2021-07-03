var firebaseConfig = {
    apiKey: "AIzaSyD3VIFCxAgy2oqNsobsvcggKMzLZWPYgQU",
    authDomain: "social-wedsite.firebaseapp.com",
    projectId: "social-wedsite",
    storageBucket: "social-wedsite.appspot.com",
    messagingSenderId: "893880476810",
    appId: "1:893880476810:web:e4fda854c128cf7f21b973"
  };
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();