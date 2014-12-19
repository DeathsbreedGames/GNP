var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.Game = function() {};

DeathsbreedGames.Game.prototype = {
	create:function() {
		this.game.world.setBounds(0, 0, 480, 320);
		this.background = this.game.add.sprite(0, 0, 'bg');
	},
	update:function() {

	}
};
