/**
 * GNP
 * Copyright (C) 2014 DeathsbreedGames
 * License: GNU Affero GPLv3
 * 
 */
var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.Game = function() {};

// Variables and functions for calculating ball x and y velocities
var ballSpeed = 300;
function getVel(deg) {
	var x = Math.cos(deg * (Math.PI / 180)) * ballSpeed;
	var y = Math.sin(deg * (Math.PI / 180)) * ballSpeed;
	return new Phaser.Point(x, y);
}

DeathsbreedGames.Game.prototype = {
	create:function() {
		// Setup basic game stuff
		this.game.world.setBounds(0, 0, 480, 320);
		this.background = this.game.add.sprite(0, 0, 'bg');

		// Create players and player variables
		this.player1 = this.game.add.sprite(20, 120, 'paddle');
		this.player2 = this.game.add.sprite(446, 120, 'paddle');
		this.player1Score = 0;
		this.player2Score = 0;
		this.playerSpeed = 250;

		// Allow players to collide with the edge of the world
		this.game.physics.arcade.enable(this.player1);
		this.game.physics.arcade.enable(this.player2);
		this.player1.body.collideWorldBounds = true;
		this.player2.body.collideWorldBounds = true;

		// Setup the ball
		this.ball = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'ball');
		this.game.physics.arcade.enable(this.ball);
		this.ball.body.velocity = getVel(45);
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
	}
};
