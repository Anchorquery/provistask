module.exports = {
	routes: [
		{
			method: "GET",
			path: "/conversation/create/:id",
			handler: "task.generateChat",
		}
	],
};