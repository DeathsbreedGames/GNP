/**
 * GNP
 * Copyright (C) DeathsbreedGames 2014
 * License: GNU Affero GPLv3
 * Year 2015
 * 
 */
var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.game = new Phaser.Game(480, 320, Phaser.AUTO, '');

DeathsbreedGames.game.state.add('Boot', DeathsbreedGames.Boot);
DeathsbreedGames.game.state.add('Preload', DeathsbreedGames.Preload);
DeathsbreedGames.game.state.add('MainMenu', DeathsbreedGames.MainMenu);
DeathsbreedGames.game.state.add('Game', DeathsbreedGames.Game);

DeathsbreedGames.game.state.start('Boot');
