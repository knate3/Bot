module.exports = class {
	  async run(client) {
const config = require('../config.json');
console.log(`Ready logged into: ${client.user.tag},\n--------CONFIG--------\nTOKEN: ${config.token}\nPREFIX: ${config.prefix}\nOWNERID: ${config.ownerID}`);
}
}