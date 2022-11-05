
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB812dU2m0Mbww8ysnQ_4QZ0xlgZ5VMvNU",
      authDomain: "kwitter-app-90b51.firebaseapp.com",
      databaseURL: "https://kwitter-app-90b51-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-90b51",
      storageBucket: "kwitter-app-90b51.appspot.com",
      messagingSenderId: "787831830710",
      appId: "1:787831830710:web:a2bbd82ad5ca1ecc528e17"
    };
    
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

