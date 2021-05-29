import Command from './command.js';
import mlbStats from '../index.js';

class Divisions extends Command {
	checkParams() {
		return;
	}

	async fetchData() {
		const response = await mlbStats.getDivisions();
		this.data = response.data.divisions[0].name;
	}

	getResponse() {
		return this.data;
	}
}

export default Divisions;
