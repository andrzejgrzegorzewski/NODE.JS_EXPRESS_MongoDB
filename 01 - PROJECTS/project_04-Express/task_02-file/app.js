const express = require('express');
const app = express(); //generowanie servera
const path = require('path');

app.listen(3000,'0.0.0.0',() => {
    console.log('Server is listening at http://localhost:3000');
});

app.get('/', (req, res) => {

    // res.send(`<!DOCTYPE html>
    // <html>
    // <body>
    // <img src="/kamien">
    // </body>
    // </html>
    // `);
    // or from another folder

    const fileName = 'index.html';
    res.sendFile(fileName, {root: path.join(__dirname,'html'),});
});

app.get('/kamien', (req, res) => {

    // const fileName = path.join(__dirname, 'img/stone_01.jpg');
    // res.sendFile(fileName);
    // or

    // z zabezpieczeniem przed wejsciem do sciezek wyzej
    // const fileName = 'stone_01.jpg';
    // res.sendFile(fileName, {root: path.join(__dirname, 'img'),});
    
    // z zapisaniem pliku na kompie klienta
    // const fileName = 'stone_01.jpg';
    // res.attachment(fileName, {root: path.join(__dirname, 'img'),});
    // res.end();


    // pobieranie z dodatkowymi ustawieniami
    const fileName = path.join(__dirname, 'img/stone_01.jpg');

    res.download(fileName, 'jakis moj plik.jpg');
    
});

