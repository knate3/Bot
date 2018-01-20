module.exports = {
	name: 'reboot',
	description: 'Reboot me',
		usage: 'reboot',
	args: true,
	owner: true,
	execute(client, message, args) {
	process.exit()



	}
}
