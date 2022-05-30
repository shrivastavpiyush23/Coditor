
const firebaseConfig = {
	apiKey: "AIzaSyBueQSrP0a65SGZ5-ENYsRHxbgK7Z6agOM",
	authDomain: "coditor-76636.firebaseapp.com",
	projectId: "coditor-76636",
	storageBucket: "coditor-76636.appspot.com",
	messagingSenderId: "514743825169",
	appId: "1:514743825169:web:f2114c45b52cee782092b0",
	measurementId: "G-612TYKCB8W"
  };
  firebase.initializeApp(firebaseConfig);
  const auth =  firebase.auth();

  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
	promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  function jump(){
    window.location.replace("https://shrivastavpiyush23.github.io/Coditor/editor.html");
    
    console.log("jump called");
    }

  function signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    console.log("login succesful")
    jump();


  }
//   function jump(){
// 	window.location.href("https://shrivastavpiyush23.github.io/Edi-Code/editor.html")
//   }
  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })

