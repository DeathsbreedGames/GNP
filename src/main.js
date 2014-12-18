/**
 * GNP
 * Copyright (C) DeathsbreedGames 2014
 * License: GNU Affero GPLv3
 * Year 2015
 * 
 */
var game = new Phaser.Game(480, 320, Phaser.AUTO, 'game', { preload:preload, create:create, update:update });

// Preloader:
function preload() {
	game.load.image('bg', 'assets/gfx/background_glowy.png');
	game.load.image('ball', 'assets/gfx/ball_glowy.png');
	game.load.image('gnp', 'assets/gfx/logo.png');
	game.load.image('paddle', 'assets/gfx/player_glowy.png');
}

// Start:
function create() {
	game.add.sprite(0, 0, 'bg');
}

// Update:
function update() {

}
