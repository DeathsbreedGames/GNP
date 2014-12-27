function backToMain() {
	this.state.start('MainMenu');
}

function playOnePlayer() {
	singlePlayer = true;
	this.state.start('Game');
}

function playTwoPlayer() {
	singlePlayer = false;
	this.state.start('Game');
}

function instructionsMenu() {
	this.state.start('InstructionsMenu');
}

function creditsMenu() {
	this.state.start('CreditsMenu');
}
