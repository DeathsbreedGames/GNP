package worlds;

import com.haxepunk.World;
import com.haxepunk.Entity;
import com.haxepunk.graphics.Text;
import com.haxepunk.graphics.Image;
import com.haxepunk.utils.Input;
import com.haxepunk.utils.Key;
import com.haxepunk.HXP;

/**
 * @copyright Nicolás Andrés Ortega
 * @license GPLv3
 * @year 2013
 * 
 */
class CreditsMenu extends World {
	public function new() { super(); }

	public override function begin() {
		addGraphic(new Text("This game was made by Nicolas Ortega, and the code", 10, 20));
		addGraphic(new Text("is under a GPLv3 license. All the graphics in this", 10, 35));
		addGraphic(new Text("game (with the exception of the logo and the cursor)", 10, 50));
		addGraphic(new Text("were originally made by captaincrunch80 (who can be", 10, 65));
		addGraphic(new Text("found at http://opengameart.org/), but they did not", 10, 80));
		addGraphic(new Text("have a license, so I took the liberty of giving them", 10, 95));
		addGraphic(new Text("a creative commons share-alike license. All the", 10, 110));
		addGraphic(new Text("sounds are under the same license as", 10, 125));
		addGraphic(new Text("captaincrunch80's other works in this project.", 10, 140));
		addGraphic(new Text("Currently you may download the source-code to this", 10, 170));
		addGraphic(new Text("project at the following link:", 10, 185));
		addGraphic(new Text("http://themusicinnoise.net/Programs/GNP/GNP.html", 10, 230));

		addGraphic(new Text("Back", 420, 300));

		Input.define("select", [Key.ENTER, Key.SPACE]);

		var fakeCursor:Entity = addGraphic(new Image("graphics/cursor.png"));
		fakeCursor.x = 405;
		fakeCursor.y = 305;
	}

	public override function update() {
		if(Input.released("select")) { HXP.world = new worlds.Menu(); }
	}
}
