// GETtest1 Checking the response status code
const config = require('../config');
test('should return a successfull status code', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	 expect(actualStatusCode).toBe(200);
});
// GETtest2 Checking that the response body contains the expected data
test('should contain the expected data in the response body', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.id).toBe(3);
});
