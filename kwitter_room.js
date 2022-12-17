
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCShPYLkao3et8ZQPLQHsjuVMCsNb-m6yM",
      authDomain: "kwitterrooms-68414.firebaseapp.com",
      databaseURL: "https://kwitterrooms-68414-default-rtdb.firebaseio.com",
      projectId: "kwitterrooms-68414",
      storageBucket: "kwitterrooms-68414.appspot.com",
      messagingSenderId: "848784240980",
      appId: "1:848784240980:web:325917cd8b84c9748cd8c1"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      function addUser()
      {
      
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
      
      purpose : "adding user"
      
      });
      //End code  
      });});}
getData();
