/* This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;
The constructor should accept two arguments: front and back.
The constructed object should have a front property that contains the text on the front of the card.
The constructed object should have a back property that contains the text on the back of the card. */

function BasicCard (front, back){

	this.front = front;
	this.back = back;
};

var basicInfo1 = new BasicCard("When you say Forward or Back your lips move in those directions", "Forward");
var basicInfo2 = new BasicCard("At age 30, youve spent a month having birthdays", "Birthdays");
var basicInfo3 = new BasicCard("Don't touch! - Scariest thing to read in Braille.", "Braille");
var basicInfo4 = new BasicCard("Shark Tank should do an episode with famous entrepreneurs and have them pitch their original business plan.", "Shark Tank");
var basicInfo5 = new BasicCard("It would really suck to have a friend named Molly, and lose her at a music festival", "Molly");

module.exports = BasicCard;