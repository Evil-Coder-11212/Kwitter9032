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
document.querySelector("#display-username").textContent = `Welcome ${username}`;

function addRoom() {
  const roomName = document.querySelector("#room-name").value;
  console.log(roomName);
  firebase
    .database()
    .ref("/")
    .child(roomName)
    .update({ purpose: "Adding Room" });
  localStorage.setItem("room-name", roomName);
  window.location = "room.html";
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) { 
  document.querySelector("#output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) 
  { 
    childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
     row = "<div id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room-name", name);
  window.location = "room.html";
}

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("room-name");
  window.location = "index.html";
}