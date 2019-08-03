// import { request } from "http";

// task_01

// // http://numbersapi.com/random/year?json

// const fetch = require('node-fetch');

// const year = process.argv[2] || Math.floor(Math.random() * 2020); //przypisuje do year to co zostalo wprowadzone w konsoli po node app.js 2019
// console.log(year);

// fetch(`http://numbersapi.com/${year}/year?json`)
// .then(response => {
    //     console.log(response.status);
//     console.log(response.ok);
//     return response.json();
// })
// .then(data => console.log(data.text))
// .catch(error => console.log('errror', err))
// -----------------------------------------------------------------------------------------------------------------------
// =======================================================================================================================

// task_02

// `http://numbersapi.com/${number}/${type}?json`

// const fetch = require('node-fetch');

// const arg = process.argv[2];
// let type = "";

// if(arg.indexOf("--year") === 0){
//     console.log('We are looking for a year!!!');
//     type = "year";
// } else if(arg.indexOf("--math") === 0){
//     console.log('We are looking for a math!!!');
//     type = "math";    
// } else if(arg.indexOf("--trivia") === 0){
//     console.log('We are looking for a trivia!!!');
//     type = "trivia";    
// }

// const equalSign = arg.search('=');
// if(equalSign === -1) console.log("Please add number. ");

// const number = arg.slice(equalSign + 1);

// // if(number === "" || isNaN(Number(number))){
// //     console.log("This is NOT a number!!!")
// //     process.exit();
// // }

// fetch(`http://numbersapi.com/${number}/${type}?json`)
// .then(res => {
//     if(res.ok){
    //         return res.json()
//     } else {
//         throw new Error("Something wrong!!! " + res.status);
//     }
// })
// .then(data => console.log(data.text))
// .catch(err => console.log('ERRRRRROR', err))

// ***********************************************************************************************************************

// task_03 NBP API - request method

// `http://api.nbp.pl/api/exchangerates/rates/a/${code}/`

const request = require('request');
const fs = require('fs');

const validCodes = ['usd', 'eur', 'gbp', 'chf'];

const code = process.argv[2];

const isValid = validCodes.find(currency => currency === code) ? true : false;
console.log(isValid);

if(!isValid) process.exit;

const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`

request(url, {json: true}, (err, res, body) => {
    console.log(body);

    if(err){
        return console.log("Error", err);
    }
    if(res.statusCode !== 200){
        return console.log("Something wrong - check URL!!!");
    }
    const message = `Average price ${body.currency} in ${body.rates[0].effectiveDate} is ${body.rates[0].mid} pln.`;

    fs.appendFile('currencies.txt', message + '\n', (err) => {
        console.log("data added to the file");

    });
     console.log(message);
});


