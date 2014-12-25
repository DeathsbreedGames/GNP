/**
 * GNP
 * Copyright (C) 2014 DeathsbreedGames
 * License: GNU Affero GPLv3
 * 
 */
var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.CreditsMenu = function() {};

DeathsbreedGames.CreditsMenu.prototype = {
	create:function() {
		// TODO: Credits text and back button
		var version = this.game.add.text(475, 315, 'v1.5-alpha0', { font: '12px Arial', fill: '#fff' });
		version.anchor.set(1, 1);

		var credits = 'Development - DeathsbreedGames - GNU Affero GPLv3\nGraphics - CaptainCrunch80 - CC0\nMusic - FoxSynergy - CC-BY 3.0\nSFX - CaptainCrunch80 - CC0\nFont - CaptainCrunch80 - CC0';
		var creditsText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, credits, { font: '12px Arial', fill:'#fff' });
		creditsText.anchor.set(0.5, 0.5);
	},
	update:function() {
		// NOT NEEDED SO FAR...
	}
};
