function backToMain() {
	this.state.start('MainMenu');
}

function playTwoPlayer() {
	this.state.start('Game');
}

function instructionsMenu() {
	this.state.start('InstructionsMenu');
}

function creditsMenu() {
	this.state.start('CreditsMenu');
}
