
const firebase = require('firebase')

const config = {
    apiKey: "AIzaSyBRiFNY7bnDyswQBfyi4LOHz2HpWYBlP8w",
    authDomain: "beauty-livery.firebaseapp.com",
    databaseURL: "https://beauty-livery.firebaseio.com",
    projectId: "beauty-livery",
    storageBucket: "beauty-livery.appspot.com",
    messagingSenderId: "98717687214",
    appId: "1:98717687214:web:8d734776ea6aa29c29bc3f",
    measurementId: "G-2Z5DHQ9X3T"
  };


  var db=firebase.initializeApp(config)


module.exports=db
