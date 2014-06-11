package entities;

import com.haxepunk.utils.Input;
import com.haxepunk.utils.Key;
import entities.Ball;
import entities.Player;

/**
 * @copyright Nicolás Andrés Ortega
 * @license GPLv3
 * @year 2013
 * 
 */
class Player1 extends Player {
	public static var Y;

	public function new(x:Float, y:Float) {
		super(x, y);
	}

	public override function update() {
		// If we are not paused
		if(Ball.playing) {
			// If the up key is pressed move up 5
			if(Input.check(Key.UP)) { moveBy(0, -5); }
			// If the down key is pressed move down 5
			else if(Input.check(Key.DOWN)) { moveBy(0, 5); }
		}

		Y = this.y;
		super.update();
	}
}