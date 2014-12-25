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

function creditsMenu() {
	this.state.start('CreditsMenu');
}

DeathsbreedGames.MainMenu.prototype = {
	create:function() {
		var logo = this.game.add.sprite(this.game.world.centerX, 5, 'logo');
		logo.anchor.set(0.5, 0);

		var twoPlayer = this.game.add.button(this.game.world.centerX, logo.y + logo.height + 10, 'TwoPlayerButton', playTwoPlayer, this);
		twoPlayer.anchor.set(0.5);
		var credits = this.game.add.button(this.game.world.centerX, twoPlayer.y + twoPlayer.height + 5, 'CreditsButton', creditsMenu, this);
		credits.anchor.set(0.5);
	},
	update:function() {
		// NOT NEEDED SO FAR...
	}
};
