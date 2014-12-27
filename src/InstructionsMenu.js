/**
 * GNP
 * Copyright (C) 2014 DeathsbreedGames
 * License: GNU Affero GPLv3
 * 
 */
var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.InstructionsMenu = function() {};

DeathsbreedGames.InstructionsMenu.prototype = {
	create:function() {
		var title = this.game.add.text(this.game.world.centerX, 10, 'Instructions', { font: '32px Arial', fill: '#fff' });
		title.anchor.set(0.5, 0);

		var instructions = 'Player 1: W, S\nPlayer 2: UP, DOWN\n\nFirst person to 10 points wins!';
		var instructionsText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, instructions, { font: '12px Arial', fill: '#fff' });
		instructionsText.anchor.set(0.5, 0.5);

		var back = this.game.add.button(this.game.world.centerX, this.game.height - 5, 'BackButton', backToMain, this);
		back.anchor.set(0.5, 1);
	},
	update:function() {
		// NOT NEEDED SO FAR...
	}
};
