export default class Message {
	constructor(message, isBotMessage: false) {
		this.isBotMessage = isBotMessage
		this.message = message
	}
}
