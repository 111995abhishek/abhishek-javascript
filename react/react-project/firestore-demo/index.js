const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json');

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

function getDialogue(){

    return new Promise(function(resolve,reject){
        resolve({
            "quote":"I'm batman",
            "author":"batman"
        });
    })
}

getDialogue().then(result =>{
    console.log(result);
    const obj = result;
    const quoteData = {
        quote: obj.quote,
        author: obj.author
    };
    
    return db.collection('sampleData').doc('inspiration')
    .set(quoteData).then(()=>
    console.log('new dialogue written to database'));
});

// db.collection("users")
// .doc()
// .set({
//     name:"salman khan",
//     email:"111995abhishek@gmail.com",
//     age:35
// })

// db.collection('users')
// .doc()
// .set({
//     name:"akshay kumar",
//     email:"akshay01@gmail.com",
//     age:45
// })

// db.collection("users")
// .doc("zqQhHZ9E2V2Y6s2FOfTQ")
// .delete()
// .then(function(){
//     console.log("document successfully deleted!");
// }).catch(
//     function(error) {
//         console.log("Error removing document: ",error);
//     });

db.collection("users")
.doc("IfaaSxjGXzD6USYjAYFN")
.update({
    name:"anbu selvan"
},
);