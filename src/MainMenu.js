/**
 * GNP
 * Copyright (C) 2014 DeathsbreedGames
 * License: GNU Affero GPLv3
 * 
 */
var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.MainMenu = function() {};

function playTwoPlayer() {
	this.state.start('Game');
}

DeathsbreedGames.MainMenu.prototype = {
	create:function() {
		this.logo = this.game.add.sprite(this.game.world.centerX, 5, 'logo');
		this.logo.anchor.set(0.5, 0);

		var twoPlayer = this.game.add.button(this.game.world.centerX, this.logo.y + this.logo.height + 10, 'TwoPlayerButton', playTwoPlayer, this);
		twoPlayer.anchor.set(0.5);
		var version = this.game.add.text(5, 5, 'v1.5-alpha0', { font: '12px Arial', fill: '#fff' });
		var credits = 'Credits:\nDevelopment - DeathsbreedGames - GNU Affero GPLv3\nGraphics - CaptainCrunch80 - CC0\nMusic - FoxSynergy - CC-BY 3.0\nSFX - CaptainCrunch80 - CC0';
		var creditsText = this.game.add.text(5, this.game.height / 2 + 80, credits, { font: '12px Arial', fill:'#fff' });
	},
	update:function() {
		// NOT NEEDED SO FAR...
	}
};
