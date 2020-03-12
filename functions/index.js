const functions = require('firebase-functions');

const db =require('./Config/config')
//const firebase = require('firebase')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

 
    





exports.getLangaues = functions.https.onRequest((request, response) => {

   
  db.firestore().collection("Language")
    .get()
    .then(querySnapshot=> {
        querySnapshot.forEach(doc=> {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
           response.send(doc.data())
        });
       return
    })
    .catch(error=> {
        console.log("Error getting documents: ", error);
    });

});



