import type { Handle, HandleError } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	return await resolve(event);
};

export const handleError: HandleError = async ({ error, event }) => {
	console.log(error.message);
};
