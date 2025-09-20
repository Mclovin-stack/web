const express = require('express');
const path = require('path');
const app = express();

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));
app.listen(3000, () => { console.log('Esta corriendo en el puerto 3000') });

app.get('/', (req, res) => { res.sendFile(path.resolve(__dirname, './vista/home.html')) });

app.get('/babbage', (req, res) => { res.sendFile(path.resolve(__dirname, './vista/babbage.html')) });

app.get('/berners-lee', (req, res) => { res.sendFile(path.resolve(__dirname, './vista/berners-lee.html')) });

app.get('/clarke', (req, res) => { res.sendFile(path.resolve(__dirname, './vista/clarke.html')) });

app.get('/hamilton', (req, res) => { res.sendFile(path.resolve(__dirname, './vista/hamilton.html')) });

app.get('/hopper', (req, res) => { res.sendFile(path.resolve(__dirname, './vista/hopper.html')) });

app.get('/lovelace', (req, res) => { res.sendFile(path.resolve(__dirname, './vista/lovelace.html')) });

app.get('/turing', (req, res) => { res.sendFile(path.resolve(__dirname, './vista/turing.html')) });