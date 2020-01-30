const express = require('express');
const morgan = require('morgan');

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

// callback function aka middleware
function handleGetTypes(req, res) {
	res.json(validTypes);
}
// constructs end point
app.get('/types', handleGetTypes);

const PORT = 8000;

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`);
});
