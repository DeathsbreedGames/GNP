var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.Preload = function() {};

DeathsbreedGames.Preload.prototype = {
	preload:function() {
		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'DGL');
		this.splash.anchor.setTo(0.5);

		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'LoadingBar');
		this.preloadBar.anchor.setTo(0.5);
		this.load.setPreloadSprite(this.preloadBar);

		// Load the game assets
		this.load.image('bg', 'assets/gfx/background_glowy.png');
		this.load.image('ball', 'assets/gfx/ball_glowy.png');
		this.load.image('logo', 'assets/gfx/logo.png');
		this.load.image('paddle', 'assets/gfx/player_glowy.png');
		this.load.audio('hit', 'assets/sfx/hitsfx.ogg');
		this.load.audio('score', 'assets/sfx/scoresfx.ogg');
		//this.load.audio('music', 'assets/sfx/Never_Stop_Running.ogg');
	},
	create:function() {
		this.state.start('MainMenu');
	}
};
