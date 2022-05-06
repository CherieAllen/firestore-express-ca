const functions = require("firebase-functions");
const express = require('express');

const app = express(); // app here is the express app

app.get('/test',(req,res)=> {
res.send('This is actually working');
});

app.get('/',(req,res) => {
    res.send ('Home');
});

exports.app = functions.https.onRequest(app);  // app here is the name of our cloud function


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
