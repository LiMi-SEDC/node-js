const fs = require('fs');

const getUsers = () => {
    let data = fs.readFileSync('./users.json');
    let parsedData = JSON.parse(data);
    return parsedData.users;
}



const getUser = (username, password) => {
    let users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        throw new Error(`User with username: ${username} or with password: ${password}, does not exist`);
    }
    console.log('User logged in');
    return user;
}


// with this piece of code i tried to do that bonus to add users to the list but this line "arrayOfObjects.users.push();" when i tried node users-server folder it says that arrayOfObjects.users.push() is not a function so tried more times still not manage so just left it there...

// const addUsers = () => {

//     fs.readFile('./users.json', function (err, data) {
//         if (err) throw err;

//         var arrayOfObjects = JSON.parse(data);
//         // arrayOfObjects.users.push();
//         fs.writeFile('./users.json', JSON.stringify(arrayOfObjects), (err) => {
//             if (err) throw err;
//             console.log(`update the users list`);
//         })
//     })
// }



module.exports = {
    getUsers,
    getUser,
    //addUsers
}