const axios = require('axios');
const API_KEY = '5c878fe4c1860b487d294b0222f83cb8';
const Weather = require('../model/model-weather');


exports.renderHomePage = (req, res) => {
    res.render('index');
}

exports.renderAboutPage = (req, res) => {
    res.render('about');
}

exports.getWeather = (req, res) => {
    const city = req.body.city;

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


    axios.get(url).then((response) => {
        // console.log(response); in console it gives all datas for cities
        res.render('index', {
            weather:
                `It is currently ${response.data.main.temp} in ${response.data.name}, ${response.data.sys.country} with timezone ${response.data.timezone} also: the maximum temperature is ${response.data.main.temp_max} and minimum temperature is ${response.data.main.temp_min} and the wind speed is ${response.data.wind.speed}`
        })
    }).catch((err) => {
        console.log(err);
    })

}







// i tried with the model connecting here but i get an error :

// Weather.prototype.validateUserInput = function () {
// TypeError: Cannot set property 'validateUserInput' of undefined

// so i tried but cant fix it but without the model it works fine i did this so if 
// in user doesn't put any name of city in the input to print the error message 
// like how the weather printed...

// exports.getWeather = function(req, res) {
//     const city = req.body.city;

//     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`



//     const weather = new Weather(req.body.city)
//     weather.validateUserInput();

//     if (weather.errors.length) {
//         res.render('index', {
//             error: weather.errors.toString()
//         });
//     } else {
//         axios.get(url).then((response) => {
//             // console.log(response);
//             res.render("index", {
//                 weather:
//                     `It is currently ${response.data.main.temp} in ${response.data.name}, ${response.data.sys.country} with timezone ${response.data.timezone} also: the maximum temperature is ${response.data.main.temp_max} and minimum temperature is ${response.data.main.temp_min} and the wind speed is ${response.data.wind.speed}`
//             });
//         }).catch((err) => {
//             console.log(err);
//         });
//     }

// }