import type { Handle, HandleError } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	return await resolve(event);
	//Try commenting out the above line and uncommenting the below
	// try {
	// 	return await resolve(event);
	// } catch {
	// 	console.log('caught');
	// 	// Then comment out this line and look what happens to the error code
	// 	// rendered on the error page
	// 	throw new Error('haha, caught');
	// }
};

export const handleError: HandleError = async ({ error, event }) => {
	console.log(error.message);
};
