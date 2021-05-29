class Command {
	async call(...args) {
		this.args = args;

		let invalidMessage = this.checkParams();
		if (invalidMessage)	return invalidMessage;

		await this.fetchData();
		return this.getResponse();
	}
}

export default Command;
