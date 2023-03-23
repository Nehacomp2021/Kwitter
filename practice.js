

/*var firebaseConfig = {
  apiKey: "AIzaSyDkjJJjjpvkgitBVVBToeW1H2PAryYYJA8",
  authDomain: "einsteinbot-ekpd.firebaseapp.com",
  databaseURL: "https://einsteinbot-ekpd-default-rtdb.firebaseio.com",
  projectId: "einsteinbot-ekpd",
  storageBucket: "einsteinbot-ekpd.appspot.com",
  messagingSenderId: "717618699927",
  appId: "1:717618699927:web:04eeefb3b280bdc29dd3d2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);*/

var firebaseConfig = {
  apiKey: "AIzaSyBhJf4u-K4pXROWhtAQFQXrn9iPSjxGpUQ",
  authDomain: "alberteinsteinbot-wirn.firebaseapp.com",
  databaseURL: "https://alberteinsteinbot-wirn-default-rtdb.firebaseio.com",
  projectId: "alberteinsteinbot-wirn",
  storageBucket: "alberteinsteinbot-wirn.appspot.com",
  messagingSenderId: "52118051988",
  appId: "1:52118051988:web:2dc77082d37075d31fa881"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;


  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


