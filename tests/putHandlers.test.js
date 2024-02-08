// PUTtest1 Checking the response status code
const config = require('../config');
const requestBody = {
	"productsList": [
        {
            "id": 1,
            "quantity": 1
        }]
}
test('should return a successfull status code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});
// PUTtest2 Checking that the response body contains the expected data
const RequestBody = {
	"productsList": [
        {
            "id": 1,
            "quantity": 1
        }]
}
test('should contain the expected data in the response body', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(RequestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody['ok']).toBe (Boolean(true));
});

