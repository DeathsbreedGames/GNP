package worlds;

import com.haxepunk.World;
import com.haxepunk.graphics.Image;
import com.haxepunk.Entity;
import com.haxepunk.HXP;
import com.haxepunk.utils.Input;
import com.haxepunk.utils.Key;
import entities.*;

/**
 * @copyright Nicolás Andrés Ortega
 * @license GPLv3
 * @year 2013
 * 
 */
class CvPGame extends World {
	public function new() { super(); }

	public override function begin() {
		// Create the background
		var aback:Entity = addGraphic(new Image("graphics/background_glowy.png"));
		aback.x = aback.y = 0;

		// Add all the entities
		add(new Player1(446, 120));
		add(new Computerplayer(20, 120));
		add(new Ball(224, 160));
		add(new Score1(250, 20));
		add(new Score2(210, 20));

		// This is setting the Balls speed to 8 units (most likely pixels/frame)
		Ball.totalmove = 8;
		// Set the Ball's timer to 0
		Ball.timer = 0;
		// Set the playing variable of the Ball to true
		Ball.playing = true;

		// Assign certain keys to the quit value
		Input.define("quit", [Key.Q, Key.ESCAPE]);
	}

	public override function update() {
		super.update();

		// If any of the quit keys are released...
		if(Input.released("quit")) {
			// Set the Ball's moving value to 0
			Ball.totalmove = 0;
			// Set the timer to 0
			Ball.timer = 0;
			// Set the playing value to 0
			Ball.playing = false;
			// Set the scores to 0
			Score1.score = 0;
			Score2.score = 0;
			// Go to the menu
			HXP.world = new worlds.Menu();
		}
	}
}