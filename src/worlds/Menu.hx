package worlds;

import com.haxepunk.World;
import com.haxepunk.HXP;
import com.haxepunk.graphics.Image;
import com.haxepunk.graphics.Text;
import com.haxepunk.utils.Input;
import com.haxepunk.utils.Key;
import com.haxepunk.Entity;
import com.haxepunk.Sfx;

/**
 * @copyright Nicolás Andrés Ortega
 * @license GPLv3
 * @year 2013
 * 
 */
class Menu extends World {
	var Cursor:Entity;
	private var cursorLocation:Int;
//	private static var music:Sfx = null;
//	private static var playthemusic = true;

	public function new() {
		super();

		// If the music variable is empty, set the music variable to the following
//		if(music == null) { music = new Sfx("audio/Never_Stop_Running.mp3"); }

		// If the music is not playing, play it in a loop
//		if(!music.playing && playthemusic) { music.loop(); }
	}

	public override function begin() {
		// Create the logo
		var logo:Entity = addGraphic(new Image("graphics/logo.png"));
		logo.x = 20;
		logo.y = 5;

		// Associate the cursor entity with an image
		Cursor = addGraphic(new Image("graphics/cursor.png"));
		// Place the cursor in front of the Single-player text that will appear a few lines later
		Cursor.x = 25;
		Cursor.y = 120;
		// Set the cursor location value (which will be used to find out which world to go to next) to 1 (a.k.a. Single-player)
		cursorLocation = 1;

		// Create an input definition
		Input.define("select", [Key.ENTER, Key.SPACE]);

		// Write the following texts
		addGraphic(new Text("Single-player", 40, 115));
		addGraphic(new Text("Multiplayer", 40, 130));
		addGraphic(new Text("Instructions", 40, 145));
		addGraphic(new Text("Credits", 40, 160));
		addGraphic(new Text("v1.4", 420, 300));
	}

	public override function update() {
		// Check for cursor movement
		if(Input.released(Key.DOWN)) { cursorLocation = cursorLocation + 1; }
		else if(Input.released(Key.UP)) { cursorLocation = cursorLocation - 1; }

		// Define the position of the cursor by an integer variable defined above
		if(cursorLocation == 1) { Cursor.y = 120; }
		else if(cursorLocation == 2) { Cursor.y = 135; }
		else if(cursorLocation == 3) { Cursor.y = 150; }
		else if(cursorLocation == 4) { Cursor.y = 165; }

		if(cursorLocation == 5) { cursorLocation = 1; }
		else if(cursorLocation == 0) { cursorLocation = 4; }

		// This is for the mute controls
//		if(Input.released(Key.M) && music.playing) { music.stop(); }
//		else if(Input.released(Key.M) && !music.playing) { music.loop(); }

		// If the select button is hit, run the chooseworld() method
		if(Input.released("select")) { chooseWorld(); }

		// Update the whole thing.
		super.update();
	}

	private function chooseWorld() {
		if(Cursor.y == 120) {
//			music.stop();
			HXP.world = new worlds.CvPGame();
		} else if(Cursor.y == 135) {
//			music.stop();
			HXP.world = new worlds.MainGame();
		}
		else if(Cursor.y == 150) { HXP.world = new worlds.InstructionsMenu(); }
		else if(Cursor.y == 165) { HXP.world = new worlds.CreditsMenu(); }
	}
}