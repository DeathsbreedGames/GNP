import com.haxepunk.Engine;
import com.haxepunk.HXP;

class Main extends Engine
{
	// Set the screen width
	public static inline var kScreenWidth:Int = 480;
	// Set the screen height
	public static inline var kScreenHeight:Int = 320;
	// Set the fps of the game
	public static inline var kFrameRate:Int = 30;
	// The name of the game
	public static inline var kProjectName:String = "GNP";

	override public function init()
	{
#if debug
		// I have no idea what htis does, just go with it
		HXP.console.enable();
#end
		// Make a new world, that being the Menu world
		HXP.world = new worlds.Menu();
	}

	public static function main() { new Main(); }

}