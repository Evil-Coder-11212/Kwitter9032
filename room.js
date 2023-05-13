// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFikE6n9MprsOJdZr3pfryUi4aGPEucaI",
  authDomain: "kwitter-8bfbc.firebaseapp.com",
  databaseURL: "https://kwitter-8bfbc-default-rtdb.firebaseio.com",
  projectId: "kwitter-8bfbc",
  storageBucket: "kwitter-8bfbc.appspot.com",
  messagingSenderId: "652865729067",
  appId: "1:652865729067:web:9df8a3abb592819879706e",
  measurementId: "G-0T8CV5CYGF",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const username = localStorage.getItem("username");
const roomName = localStorage.getItem("room-name");
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(roomName).push({
    name:username,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


function logout() {
localStorage.removeItem("username");
localStorage.removeItem("room-name");
window.location.replace("index.html");
}