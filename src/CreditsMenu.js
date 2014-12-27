/**
 * GNP
 * Copyright (C) 2014 DeathsbreedGames
 * License: GNU Affero GPLv3
 * 
 */
var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.CreditsMenu = function() {};

function backToMain() {
	this.state.start('MainMenu');
}

DeathsbreedGames.CreditsMenu.prototype = {
	create:function() {
		var version = this.game.add.text(475, 315, 'v1.5-alpha0', { font: '12px Arial', fill: '#fff' });
		version.anchor.set(1, 1);

		var creditsTitle = this.game.add.text(this.game.world.centerX, 10, 'Credits', { font: '32px Arial', fill: '#fff' });
		creditsTitle.anchor.set(0.5, 0);
		var credits = 'Development - DeathsbreedGames - GNU Affero GPLv3\nGraphics - CaptainCrunch80 - CC0\nMusic - FoxSynergy - CC-BY 3.0\nSFX - CaptainCrunch80 - CC0\nFont - Brian Kent - Freeware';
		var creditsText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, credits, { font: '12px Arial', fill: '#fff' });
		creditsText.anchor.set(0.5, 0.5);

		var back = this.game.add.button(this.game.world.centerX, this.game.height - 5, 'BackButton', backToMain, this);
		back.anchor.set(0.5, 1);
	},
	update:function() {
		// NOT NEEDED SO FAR...
	}
};
