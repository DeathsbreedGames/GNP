var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.MainMenu = function() {};

DeathsbreedGames.MainMenu.prototype = {
	create:function() {
		var text = 'Click to play!';
		var style = { font: '30px Arial', fill: '#fff', align: 'center' };
		var t = this.game.add.text(this.game.width / 2, this.game.height / 2, text, style);
		t.anchor.set(0.5);
	},
	update:function() {
		if(this.game.input.mouse.button == Phaser.Mouse.LEFT_BUTTON) {
			this.state.start('Game');
		}
	}
};
