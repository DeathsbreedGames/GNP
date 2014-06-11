package entities;

import entities.Ball;
import entities.Player;

/**
 * @copyright Nicolás Andrés Ortega
 * @license GPLv3
 * @year 2013
 * 
 */
class Computerplayer extends Player {
	public static var Y;
	
	public function new(x:Float, y:Float) {
		super(x, y);
	}

	public override function update() {
		// If the Ball entity's value, playing, is true and the Ball entity's value, movex, is less than 0...
		if(Ball.playing && Ball.movex < 0) {
			// If the Ball's X value is less than or equal to 240, and the Ball's Y value is less than this entity's y value...
			if(Ball.X <= 240 && Ball.Y < this.y + 30) { moveBy(0, -5); } // Move up by 5 (please note that the origin is in the top left corner)
			// Same as two lines back, but the Ball's Y value is greater than this entity's y value...
			else if(Ball.X <= 240 && Ball.Y > this.y + 30) { moveBy(0, 5); } // Move down 5
		}

		Y = this.y;
		super.update();
	}
}