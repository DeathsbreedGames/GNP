var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.Game = function() {};

var cursors;

DeathsbreedGames.Game.prototype = {
	create:function() {
		this.game.world.setBounds(0, 0, 480, 320);
		this.background = this.game.add.sprite(0, 0, 'bg');

		this.player1 = this.game.add.sprite(20, 120, 'paddle');
		this.player2 = this.game.add.sprite(446, 120, 'paddle');
		this.player1Score = 0;
		this.player2Score = 0;
		this.playerSpeed = 250;

		this.wKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
		this.sKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

		this.game.physics.arcade.enable(this.player1);
		this.game.physics.arcade.enable(this.player2);
		this.player1.body.collideWorldBounds = true;
		this.player2.body.collideWorldBounds = true;

		cursors = this.game.input.keyboard.createCursorKeys();
	},
	update:function() {
		if(this.wKey.isDown) {
			this.player1.body.velocity.y = -this.playerSpeed;
		} else if(this.sKey.isDown) {
			this.player1.body.velocity.y = this.playerSpeed;
		} else {
			this.player1.body.velocity.y = 0;
		}

		if(cursors.up.isDown) {
			this.player2.body.velocity.y = -this.playerSpeed;
		} else if(cursors.down.isDown) {
			this.player2.body.velocity.y = this.playerSpeed;
		} else {
			this.player2.body.velocity.y = 0;
		}
	}
};
