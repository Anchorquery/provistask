

module.exports = {
	routes: [
		{
			method: "POST",
			path: "/meta/me",
			handler: "meta-user.updateMe",
		},
	],
};