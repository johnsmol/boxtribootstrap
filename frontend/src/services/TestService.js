
export async function getTest() {
	try {
		const response = await fetch("/test");
		return await response.json();
	} catch (error) {
		return [];
	}
}