var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.Game = function() {};

DeathsbreedGames.Game.prototype = {
	create:function() {
		this.game.world.setBounds(0, 0, 480, 320);
		this.background = this.game.add.sprite(0, 0, 'bg');

		this.player1 = this.game.add.sprite(20, 120, 'paddle');
		this.player2 = this.game.add.sprite(446, 120, 'paddle');
		this.player1Score = 0;
		this.player2Score = 0;
		this.playerSpeed = 250;

		this.ball = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'ball');

		this.game.physics.arcade.enable(this.player1);
		this.game.physics.arcade.enable(this.player2);
		this.player1.body.collideWorldBounds = true;
		this.player2.body.collideWorldBounds = true;
	},
	update:function() {
		if(this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
			this.player1.body.velocity.y = -this.playerSpeed;
		} else if(this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
			this.player1.body.velocity.y = this.playerSpeed;
		} else {
			this.player1.body.velocity.y = 0;
		}

		if(this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			this.player2.body.velocity.y = -this.playerSpeed;
		} else if(this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
			this.player2.body.velocity.y = this.playerSpeed;
		} else {
			this.player2.body.velocity.y = 0;
		}
	}
};
