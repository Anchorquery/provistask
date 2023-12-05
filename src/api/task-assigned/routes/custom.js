

module.exports = {
	routes: [
		{
			method: "GET",
			path: "/task-assigneds/by-payment-intent/:paymentIntentId",
			handler: "task-assigned.taskByPaymentIntent",
			
		},
		{
			method: "GET",
			path: "/task-assigneds/completed/:id",
			handler: "task-assigned.taskCompleted",
			
		},
		{
			method: "GET",
			path: "/task-assigneds/acepted/:id",
			handler: "task-assigned.taskAcepted",
			
		},
		{
			method: "GET",
			path: "/task-assigneds/pending-task",
			handler: "task-assigned.taskPending",
		},
		{
			method: "GET",
			path: "/task-assigneds/by-conversation/:id",
			handler: "task-assigned.taskByConversation",
			
		},
		{
			method: "POST",
			path: "/task-assigneds/canceled-task",
			handler: "task-assigned.taskCanceled",
			
		},
	],
};