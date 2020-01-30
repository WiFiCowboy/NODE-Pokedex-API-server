require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const POKEDEX = require('./pokedex.json');

const app = express();

app.use(morgan('dev'));
// pokemon types
const validTypes = [
	`Bug`,
	`Dark`,
	`Dragon`,
	`Electric`,
	`Fairy`,
	`Fighting`,
	`Fire`,
	`Flying`,
	`Ghost`,
	`Grass`,
	`Ground`,
	`Ice`,
	`Normal`,
	`Poison`,
	`Psychic`,
	`Rock`,
	`Steel`,
	`Water`
];

app.use(function validateBearerToken(req, res, next) {
	const apiToken = process.env.API_TOKEN;
	const authToken = req.get('Authorization');

	if (!authToken || authToken.split(' ')[1] !== apiToken) {
		return res.status(401).json({ error: 'Unathorized request' });
	}
	// move to the next middleware
	next();
});
// callback function aka middleware
function handleGetTypes(req, res) {
	res.json(validTypes);
}

// constructs end point
app.get('/types', handleGetTypes);

function handleGetPokemon(req, res) {
	res.json(POKEDEX);
	console.log(POKEDEX);
}

app.get('/pokemon', handleGetPokemon);

const PORT = 8000;

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`);
});
