/**
 * GNP
 * Copyright (C) 2014 DeathsbreedGames
 * License: GNU Affero GPLv3
 * 
 */
var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.Game = function() {};

DeathsbreedGames.Game.prototype = {
	create:function() {
		// Setup basic game stuff
		this.game.world.setBounds(0, 0, 480, 320);
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.background = this.game.add.sprite(0, 0, 'bg');

		// Create players and player variables
		this.player1 = this.game.add.sprite(20, 120, 'paddle');
		this.player2 = this.game.add.sprite(446, 120, 'paddle');
		this.player1.score = 0;
		this.player2.score = 0;
		this.playerSpeed = 250;

		// Allow players to collide with the edge of the world
		this.game.physics.arcade.enable(this.player1);
		this.game.physics.arcade.enable(this.player2);
		this.player1.body.collideWorldBounds = true;
		this.player2.body.collideWorldBounds = true;
		this.player1.body.immovable = true;
		this.player2.body.immovable = true;

		// Setup the ball
		this.ball = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'ball');
		this.game.physics.arcade.enable(this.ball);
		this.ball.body.velocity = new Phaser.Point(250, 250);
		this.ball.body.collideWorldBounds = true;
		this.ball.body.bounce = new Phaser.Point(1, 1);
	},
	update:function() {
		// Check for player 1 input
		if(this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
			this.player1.body.velocity.y = -this.playerSpeed;
		} else if(this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
			this.player1.body.velocity.y = this.playerSpeed;
		} else {
			this.player1.body.velocity.y = 0;
		}

		// Check for player 2 input
		if(this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			this.player2.body.velocity.y = -this.playerSpeed;
		} else if(this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
			this.player2.body.velocity.y = this.playerSpeed;
		} else {
			this.player2.body.velocity.y = 0;
		}

		// Check for collision with paddles
		this.game.physics.arcade.collide(this.player1, this.ball);
		this.game.physics.arcade.collide(this.player2, this.ball);

		// Check for collision with goals
		if(this.ball.position.x < 5 || this.ball.position.x > 415) {
			// TODO: reset the ball
			console.log('GOOOOOOOOAAAL!!!');
		}
	}
};
