const express = require('express');
const {success} = require('./helper');
let pokemons = require('./mock-pokemon');

const app = express();
const port =  3000;


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





app.listen(port, () => console.log(`Our application Node is running on : http://localhost:${port}`));




/*
 *  TRASH
*/

// app.get('/api/pokemon/:id/:name',(req,res) => {
//     const id = req.params.id;
//     const name = req.params.name;

//     res.send(`You ask for the pokemon number ${id}, which is ${name}`);
// });
