require('dotenv').config();

if(!process.env.TOKEN && !process.env.KEY){
  throw new Error('No hay configuración con Api Key y con Token');
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`;

let cardDescription = "LaunchX Card Description";

let boardColumn = "6270717c73acae7448915384";

trello.addCard(cardTitle, cardDescription, boardColumn,
	function (error, trelloCard) {
		if (error) {
			console.log('Could not add card:', error);
		}
		else {
			console.log('Added card:', trelloCard);
		}
	});