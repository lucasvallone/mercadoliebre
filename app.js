const express = require ('express');
const app = express ();

const path = require ('path');

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})

app.get('/home', (req, res) => {
    res.sendFile (path.join (__dirname, '/views/home.html') )
});

app.get('/register', (req, res) => {
    res.sendFile (path.join (__dirname, '/views/register.html') )
});

app.get('/login', (req, res) => {
    res.sendFile (path.join (__dirname, '/views/login.html') )
});

app.use(express.static(path.join(__dirname, './public')));