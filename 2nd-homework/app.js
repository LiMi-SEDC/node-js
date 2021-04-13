const math = require('./math');
const text_service = require('./text-service')
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// ----here i did the file writing,reading and appending in pieces to not break something...----

// DONE with 'WRITING'...
// rl.question('Name of the file to create: ', fileName => {
//     rl.question('Write something: ', text => {
//         console.log(text_service.writeFiles(fileName, text));
//         rl.close();
//     })
// })

// DONE with READING...
// rl.question('Read the file: ', (nameFile) => {
//     console.log(text_service.readFiles(nameFile));
//     rl.close();
// })

// DONE with APPENDING...
// rl.question('Name of the file to update: ', fileName => {
//     rl.question('Write something: ', text => {
//         console.log(text_service.appendFiles(fileName, text));
//         rl.close();
//     })
// })


// ----here i tried if it works with switch statement----

// rl.question('Which file method do you want to use: ', method => {
//     switch (method) {
//         case 'write':
//             rl.question('Name of the file to create: ', fileName => {
//                 rl.question('Write something: ', text => {
//                     console.log(text_service.writeFiles(fileName, text));
//                     rl.close();
//                 })
//             })
//             break;
//         case 'read':
//             rl.question('Read the file: ', (nameFile) => {
//                 console.log(text_service.readFiles(nameFile));
//                 rl.close();
//             })
//             break;
//         case 'update':
//             rl.question('Name of the file to update: ', fileName => {
//                 rl.question('Write something: ', text => {
//                     console.log(text_service.appendFiles(fileName, text));
//                     rl.close();
//                 })
//             })
//             break;
//         default:
//             console.log("SOME ERROR OCURRED");
//             break;
//     }
// })


// here i added all together with math functions and files so it have a choice do work with both of them 

rl.question('Which method do you want to try: math exercises(type: math) or work with files(type: file): ', method => {
    switch (method) {
        case 'math':
            let result;
            rl.question("Which method do you want to use? ", method => {
                if (Object.keys(math).includes(method.trim())) {
                    rl.question("Write the first number? ", num1 => {
                        if (!num1.trim() || !Number(num1.trim())) {
                            console.log(`SOME ERROR OCCURRED WHILE GETTING THE FIRST NUMBER.`);
                            rl.close();
                        } else {
                            rl.question("Write the second number? ", num2 => {
                                if (!num2.trim() || !Number(num2.trim())) {
                                    console.log(`SOME ERROR OCCURRED WHILE GETTING THE SECOND NUMBER.`);
                                    rl.close();
                                } else {
                                    switch (method.toLowerCase()) {
                                        case "sum":
                                            result = math.sum(Number(num1), Number(num2));
                                            break;
                                        case "subtract":
                                            result = math.subtract(Number(num1), Number(num2));
                                            break;
                                        case "multiply":
                                            result = math.multiply(Number(num1), Number(num2));
                                            break;
                                        case "divide":
                                            result = math.divide(Number(num1), Number(num2));
                                            break;
                                        default:
                                            console.log("There has been an error!");
                                            break;
                                    }

                                    console.log("RESULT", result);
                                    rl.close();
                                }
                            });
                        }
                    });
                } else {
                    console.log(`Method ${method} not recognized, app stopped.`);
                    rl.close();
                }
            });
            break;
        case 'file':
            rl.question('Which file method do you want to use: ', method => {
                switch (method) {
                    case 'write':
                        rl.question('Name of the file to create: ', fileName => {
                            rl.question('Write something: ', text => {
                                console.log(text_service.writeFiles(fileName, text));
                                rl.close();
                            })
                        })
                        break;
                    case 'read':
                        rl.question('Read the file: ', (nameFile) => {
                            console.log(text_service.readFiles(nameFile));
                            rl.close();
                        })
                        break;
                    case 'update':
                        rl.question('Name of the file to update: ', fileName => {
                            rl.question('Write something: ', text => {
                                console.log(text_service.appendFiles(fileName, text));
                                rl.close();
                            })
                        })
                        break;
                    default:
                        console.log("SOME ERROR OCURRED");
                        break;
                }
            })
            break;
        default:
            console.log('ERROR HAPPENED...');
            break;
    }
})