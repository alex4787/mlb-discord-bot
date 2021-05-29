import Divisions from "./commands/divisions.js";

const prefix = "!mlb";

const routes = {
	"divisions": new Divisions(),
}

const help = () => "Sorry!";
const unknown = () => "Unknown command";

const route = async message => {
	const respond = response => message.channel.send(response);
	
	const [ first, command, ...args ] = message.content.split(" ");

	if (first !== prefix)	return;
	if (!command)	{
		respond(help());
		return;
	}
	
	respond(command in routes ? await routes[command].call(...args) : unknown());
}

export default route;
