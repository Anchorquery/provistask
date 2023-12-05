

module.exports = {
	routes: [
		{
			method: "GET",
			path: "/notifications/marked-as-read/:id",
			handler: "notification.markRead",
		},
	],
};