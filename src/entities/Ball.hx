package entities;

import com.haxepunk.Entity;
import com.haxepunk.graphics.Image;
import com.haxepunk.utils.Input;
import com.haxepunk.utils.Key;
import com.haxepunk.Sfx;

/**
 * @copyright Nicolás Andrés Ortega
 * @license GPLv3
 * @year 2013
 * 
 */
class Ball extends Entity {
	public static var movex:Float;
	private static var movey:Float;
	private static var angledeg:Float;
	private static var anglerad:Float;
	public static var totalmove;
	public static var timer;
	public static var X:Float;
	public static var Y:Float;
	public static var playing:Bool;
	private static var hitsfx:Sfx;
	private static var scoresfx:Sfx;

	public function new(x:Float, y:Float) {
		super(x, y);

		// Set the graphical image representation on the screen to the following
		graphic = new Image("graphics/ball_glowy.png");
		// Set the hitbox area (this is just to check for collisions)
		setHitbox(16, 16, 0, 0);
		// We set the type as "ball", this is to distinguish it form other entities
		type = "ball";
		// Find an initial angle
		angledeg = Math.random() * 30 + 30;

		//  Define the sound variables
#if flash
		if(hitsfx == null) { hitsfx = new Sfx("audio/hitsfx.mp3"); }
		if(scoresfx == null) { scoresfx = new Sfx("audio/scoresfx.mp3"); }
#else
		if(hitsfx == null) { hitsfx = new Sfx("audio/hitsfx.ogg"); }
		if(scoresfx == null) { scoresfx = new Sfx("audio/scoresfx.ogg"); }
#end
	}

	public override function update() {
		// This method will be defined later in the code
		if(Input.released(Key.P) && playing) { playing = false; }
		else if(Input.released(Key.P) && !playing) { playing = true; }

		// Check for collisions
		updateCollisions();

		// This is for wall rebounds.
		if(y <= 16 || y >= 305) { angledeg = 360 - angledeg; }

		if(angledeg < 0) { angledeg = angledeg + 360; }

		// These are just to make sure we don't have any horizontal or vertical angles for the ball
		if(angledeg <= 10 && angledeg >= 350) {
			angledeg = Math.random()*360;
		} else if(angledeg <= 190 && angledeg >= 170) {
			angledeg = Math.random()*360;
		} else if(angledeg <= 100 && angledeg >= 80) {
			angledeg = Math.random()*360;
		} else if(angledeg <= 280 && angledeg >= 260) {
			angledeg = Math.random()*360;
		}

		// If the ball scores, use the score method which is defined later in the code
		if(x <= -16) { score(); }
		if(x >= 480) { score(); }

		// Define the current angle in radians (because the sine and cosine won't let me use degrees)
		anglerad = angledeg * Math.PI / 180;

		// Find how much the ball needs to move in the X direction and the Y direction
		movex = Math.cos(anglerad) * totalmove;
		movey = -Math.sin(anglerad) * totalmove;

		// If we are not paused
		if(playing) {
			// Move the damn thing.
			moveBy(movex, movey);
		}
		// These I just added so that other entities (mainly the score?.hx entities) can read the X and Y positions
		X = this.x;
		Y = this.y;

		super.update();
	}

	private function updateCollisions() {
		// Define the collision
		var collision = collide("player", x, y);
		// If there is a collision...
		if (collision != null) {
			// if the ball's x position is greater than 400 and the movex variable is greater than 0...
			if(this.x > 400 && movex > 0) {
				// Run the RightSideReflection method (which is expressed later)
				rightSideReflection();
				// Play the hitsfx sound
				hitsfx.play();
			// if not the previous if, if the ball's x position is less than 50 and the movex variable is less than 0
			} else if(this.x < 50 && movex < 0) {
				// Run the leftSideReflection method (which is expressed later)
				leftSideRelfection();
				// Play the hitsfx sound
				hitsfx.play();
			}
		}
	}

	private function rightSideReflection() {
		// Basic reflection mathematics
		angledeg = 180 - angledeg;
	}

	private function leftSideRelfection() {
		// Some more basic relfection
		angledeg = 180 - angledeg;
	}

	private function score() {
		// Set the total velocity to 0
		totalmove = 0;

		// Add one to the timer
		timer++;
		// Once the timer reaches 90...
		if(timer == 90) {
			// Set the coordinates to (240, 160), that is, the centre
			x = 240;
			y = 160;
			// Change the angle to some random number between 0 and 360
			angledeg = Math.random()*360;
			// Change the total velocity to 7
			totalmove = 8;
			// Set the timer back to 0
			timer = 0;
		}
		// If the timer is equal to 1...
		if(timer == 1) {
			// Play the sound scoresfx
			scoresfx.play();
		}
	}

}