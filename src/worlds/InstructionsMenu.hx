package worlds;

import com.haxepunk.World;
import com.haxepunk.HXP;
import com.haxepunk.graphics.Text;
import com.haxepunk.graphics.Image;
import com.haxepunk.utils.Input;
import com.haxepunk.utils.Key;
import com.haxepunk.Entity;

/**
 * @copyright Nicolás Andrés Ortega
 * @license GPLv3
 * @year 2013
 * 
 */
class InstructionsMenu extends World {
	public function new() { super(); }

	public override function begin() {
		addGraphic(new Text("Instructions:", 20, 20));
		addGraphic(new Text("Moving: Up & Down or W & S.", 20, 50));
		addGraphic(new Text("Pausing: P.", 20, 65));
		addGraphic(new Text("Mute the music: M", 20, 80));
		addGraphic(new Text("Quit to menu: Q or ESC.", 20, 95));
		addGraphic(new Text("It's simple... Just go with it.", 20, 125));

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