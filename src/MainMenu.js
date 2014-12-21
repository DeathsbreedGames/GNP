/**
 * GNP
 * Copyright (C) 2014 DeathsbreedGames
 * License: GNU Affero GPLv3
 * 
 */
var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.MainMenu = function() {};

DeathsbreedGames.MainMenu.prototype = {
	create:function() {
		var style = { font: '30px Arial', fill: '#fff', align: 'center' };
		var click = this.game.add.text(this.game.width / 2, this.game.height / 2, 'Click to play!', style);
		var version = this.game.add.text(5, 5, 'v1.5-alpha0', { font: '12px Arial', fill: '#fff' });
		click.anchor.set(0.5);
	},
	update:function() {
		if(this.game.input.mouse.button == Phaser.Mouse.LEFT_BUTTON) {
			this.state.start('Game');
		}
	}
};
