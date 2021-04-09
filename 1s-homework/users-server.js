const fs = require('fs');
const users = require('./app');

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});




rl.question("Type the username of the user you want to get? USERNAME: ", function (username) {
    rl.question(`Type the password: PASSWORD: `, password => {

        if (username === username) {
            if (password === password) {
                console.log(users.getUser(username.trim(), password.trim()));
            } else {
                console.log(Error);
            }
        }

        rl.close()
    })
});


// WHAT I WANTED TO DO IS TO CREATE A FUNCTION IN app.js THAT CAN ADD AN USER, CONNECT IN THIS FILE users-server.js AND TO DO WITH rl.question() THAT ASK TO ADD AN USER, TO WRITE THE USER IN TERMINAl like... add a new user {id:3,name:"LiMi",academy:"code"}, PRESS ENTER AND PUTS IT IN THE users.json FILE  


// here i tried with that addUsers function from app.js folder but as i said(in app.js file comment) it didn't work... 

// rl.question('add new user', user => {
//     console.log(users.addUsers(user));
//     rl.close();
// })



// when i tried with this it worked, puts a new user to the users.json correctly but just when i press 'node users-server' directly put the user that a write in the arrayOfObjects.users.push({--here--}) 

// fs.readFile('./users.json', function (err, data) {
//     if (err) throw err;

//     var arrayOfObjects = JSON.parse(data)
//     arrayOfObjects.users.push({
//         name: "Mikhail",
//         age: 24,
//     });

//     fs.writeFile('./users.json', JSON.stringify(arrayOfObjects), (err) => {
//         if (err) throw err;
//         console.log(`update the users list`);
//     })
// })

