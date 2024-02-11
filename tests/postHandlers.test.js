// POSTtest1 Checking the response status code
const config = require('../config');

const requestBody = {    
	"id": 1,
	"name": "My card"
}
test('should return a successfull status code', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/cards`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(201);
});
// POSTtest2 Checking that the response body contains the expected data
const RequestBody = {    
		"id": 1,
		"name": "My card"
}

test('should contain the expected data in the response body', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/cards`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(RequestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.name).toBe("My card");
});