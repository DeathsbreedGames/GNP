package entities;

import com.haxepunk.Entity;
import com.haxepunk.graphics.Text;
import entities.Ball;

/**
 * @copyright Nicolás Andrés Ortega
 * @license GPLv3
 * @year 2013
 * 
 */
class Score1 extends Entity {
	public static var score:Int;
	private static var scoreText:Text;

	public function new(x:Float, y:Float) {
		super(x, y);

		// Create the score text, because apparently it's too hard to display an integer instead of a string
		scoreText = new Text(" ");
		// Set the text color
		scoreText.color = 0x00EE00;

		// The graphics for this class is the text
		graphic = scoreText;
		// This puts it at the very top, though I'm not sure I need it
		layer = 0;
	}

	public override function update() {
		// If the Ball's X value is less than or equal to 0 and the Ball's timer is equal to 1, add to the score value
		if(Ball.X <= -16 && Ball.timer == 1) { score++; }
		// Set the scoretext to a "stringed" version of the score integer
		scoreText.text = Std.string(score);

		super.update();
	}
}