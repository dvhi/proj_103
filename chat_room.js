const firebaseConfig = {
  apiKey: "AIzaSyBEt_stkx30OYwfO214sD-k6GpnHErqvI4",
  authDomain: "new-kwitter-final.firebaseapp.com",
  databaseURL: "https://new-kwitter-final-default-rtdb.firebaseio.com",
  projectId: "new-kwitter-final",
  storageBucket: "new-kwitter-final.appspot.com",
  messagingSenderId: "570286322568",
  appId: "1:570286322568:web:ef12bb77c3364ab666003d"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = " Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({   
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "chat_page.html";
}

function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+ Room_names+"  onclick = 'redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "chat_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
}