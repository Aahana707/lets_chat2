var firebaseConfig = {
    apiKey: "AIzaSyD3VIFCxAgy2oqNsobsvcggKMzLZWPYgQU",
    authDomain: "social-wedsite.firebaseapp.com",
    projectId: "social-wedsite",
    storageBucket: "social-wedsite.appspot.com",
    messagingSenderId: "893880476810",
    appId: "1:893880476810:web:e4fda854c128cf7f21b973"
  };
  firebase.initializeApp(firebaseConfig);
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) 
    {document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
    });});}
getData();
function add_room(){
    room_name=document.getElementById("room_name").Value;
    firebase.database().ref("/").child(room_name).update(
          { purpose : "adding room name" });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
}
function redirectToRoomName(){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kitter_page.html"

}
