var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.Boot = function() {};

DeathsbreedGames.Boot.prototype = {
	preload:function() {
		this.load.image('DGL', 'assets/gfx/DeathsbreedGames_Production.png');
		this.load.image('LoadingBar', 'assets/gfx/LoadingBar.png');
	},

	create:function() {
		this.game.stage.backgroundColor = '#000';

		this.scale.pageAlignHorizontally = true;

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.state.start('Preload');
	}
};
