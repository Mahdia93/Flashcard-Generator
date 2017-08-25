/* Create a new file named ClozeCard.js:
This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
The constructor should accept two arguments: text and cloze.
The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
The constructed object should have a partial property that contains only the partial text.
The constructed object should have a fullText property that contains only the full text.
The constructor should throw or log an error when the cloze deletion does not appear in the input text.
Use prototypes to attach these methods, wherever possible. */

var BasicCard = require("./BasicCard.js");

function ClozeCard (text, cloze){
	if  (this instanceof ClozeCard){

	this.fullText = fullText;
	this.clozeText = closecloze;
	this.partialText = partialText;
} else {
	var brokenClozeMessage = "you broke it"; + this.fullText
}
};
var clozeInfo1 = new ClozeCard("When you say Forward or Back your lips move in those directions", "Forward");
var clozeInfo2 = new ClozeCard("At age 30, youve spent a month having birthdays", "Birthdays");
var clozeInfo3 = new ClozeCard("Don't touch! - Scariest thing to read in Braille.", "Braille");
var clozeInfo4 = new ClozeCard("Shark Tank should do an episode with famous entrepreneurs and have them pitch their original business plan.", "Shark Tank");
var clozeInfo5 = new ClozeCard("It would really suck to have a friend named Molly, and lose her at a music festival", "Molly");


module.exports = ClozeCard;