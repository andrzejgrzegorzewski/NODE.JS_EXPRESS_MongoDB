const express = require('express');
const app = express(); //generowanie servera

app.listen(3000,'0.0.0.0',() => {
    console.log('Server is listening at http://localhost:3000');
});

// app.get('/', (req) => {
//     console.log('Hello WORLD!');
//     console.log(req.hostname);
//     console.log(req.ips);
//     console.log(req.url);
//     console.log(req.originalUrl);
//     console.log(req.path);

//     const {name, surname} = req.query;

//     console.log(name,surname);


//     if(req.protocol !== 'https'){
//         console.log('Not protected protocol')
//     }
//     // or

//     if(!req.secure){
//         console.log('Not protected protocol')
//     }
// });

// app.get('/hi', () => {
//     console.log('Hi WORLD!');
// });




// NEXT

// app.get('/', (req) => {
//     console.log("spis ludzi");
// });

// app.get('/:id', (req) => {
//     console.log("Info szczegolowe na temat ID " + req.params.id);
// });

// app.post('/', (req) => {
//     console.log('Dodawanie nowej osoby.')
// });

// app.param('/:id', (req) => {
//     console.log('Aktualizacja osoby o ID ' + req.params.id);
// });

// app.delete('/1', (req) => {
//     console.log('usuwanie osoby o ID 1');
// });



//NEXT
// app.get('/hello/new-user', (req) => {
//         console.log("Dodanie nowego Uzytkownika");
// });

// app.get('/hello/:name', (req) => {
//         console.log('Powitanie osoby ' + req.params.name);
// });


//NEXT
// app.get('/article/:id/:title?', (req) => {
//     console.log(req.params);
// })


// -----------------------------------------------------------------------------------------------
// OBJECT RES

// app.get('/', (req, res) => {
//     res.write("czesc");
//     res.end();
// });

// NEXT
// app.get('/', (req, res) => {
    //     const string = 'Zażółć gęsią jażń!';
    //     const array = string.split(' ');
    
    //     res.send(array);
    // });
    

// NEXT
// app.get('/', (req, res) => {
//     // res.location('https://google.com');
//     // res.sendStatus(302);
//     // or

//     // res.redirect('/another/path');
//     res.redirect('https://google.com');
// });

// NEXT
// app.get('/home/about/company', (req, res) => {
//     res.redirect('..');
// });

// NEXT
app.get('/', (req, res) => {
    res.send('<a href="/go_back">Back</a>');
});

app.get('/go_back', (req, res) => {
    res.redirect('back');
});

