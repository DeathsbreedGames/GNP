package entities;

import com.haxepunk.Entity;
import com.haxepunk.graphics.Image;

/**
 * @copyright Nicolás Andrés Ortega
 * @license GPLv3
 * @year 2013
 * 
 */
class Player extends Entity {
	public function new (x:Float, y:Float) {
		super(x, y);

		// Set the graphic representation of the player
		graphic = new Image("graphics/player_glowy.png");
		// Set the hitbox to check for collisions
		setHitbox(14, 60);

		// Set the entity type
		type = "player";
	}

	public override function update() {
		// The following two lines are just to make sure the entity doesn't go off screen
		if(y <= 0) { moveBy(0, 5); }
		else if(y > = 260) { moveBy(0, -5); }

		super.update();
	}
}