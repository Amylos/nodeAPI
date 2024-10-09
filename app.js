const express = require('express');
const {success} = require('./helper');

// MIDDLEWARE
const morgan = require('morgan');
const favicon = require('serve-favicon')

let pokemons = require('./mock-pokemon');

const app = express();
const port =  3000;



app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello Express !! ');
});

app.get('/api/pokemon/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokemons.find((pokemon) => pokemon.id === id);
    const message = "Un pokémon a bien été trouvé.";

    res.json(success(message, pokemon));
});

app.get('/api/pokemons',(req,res) =>{
    const message = "La liste des pokémons a bien été trouvée.";

    res.json(success(message,pokemons));
});


app.post('/api/pokemons' , (req,res) =>{
    const id = 123;
    const pokemonCreated = {...req.body, ...{id : id, created: new Date()}}
    pokemons.push(pokemonCreated);
    const message = `Le pokémon ${pokemonCreated.name} a bien été crée.`
    res.json(success(message, pokemonCreated))
})





app.listen(port, () => console.log(`Our application Node is running on : http://localhost:${port}`));






/*
 * TRASH
 */


// app.use((req,res, next ) =>{
//     console.log(`URL : ${req.url}`);
//     next();
// });