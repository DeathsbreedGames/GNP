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
// If you're looking for explanations, just go to Score1, I'm too lazy to comment the same thing twice.
class Score2 extends Entity {
	public static var score:Int;
	private static var scoreText:Text;

	public function new(x:Float, y:Float) {
		super(x, y);

		scoreText = new Text(" ");
		scoreText.color = 0x00EE00;

		graphic = scoreText;
		layer = 0;
	}

	public override function update() {
		if(Ball.X >= 480 && Ball.timer == 1) { score++; }
		scoreText.text = Std.string(score);

		super.update();
	}
}