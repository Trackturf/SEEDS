

const firebaseConfig = {
    apiKey: "AIzaSyCkAaZw9eh5AL3BZozvys4l3_NzLI0LIN8",
    authDomain: "seeds-5de95.firebaseapp.com",
    databaseURL: "https://seeds-5de95-default-rtdb.firebaseio.com",
    projectId: "seeds-5de95",
    storageBucket: "seeds-5de95.appspot.com",
    messagingSenderId: "153049616948",
    appId: "1:153049616948:web:04bbfcf8a7875051167061"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function bakwas() {
    name1 = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phno = document.getElementById("phno").value;
    textarea = document.getElementById("textarea").value;
    console.log(name1+email+phno+textarea);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phno").value = "";
    document.getElementById("textarea").value = "";

    firebase.database().ref("/").child(name1).update({
        email:email,
        phone_no:phno,
        problems_suggestion:textarea
    });
}
function login() {
    document.getElementById("popup").style = "visibility: visible;"
}
function OGsign_in(){
    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    localStorage.setItem("key_1",user );
    localStorage.setItem("key_2",password );
}