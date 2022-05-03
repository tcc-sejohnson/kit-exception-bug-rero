import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = () => {
	throw new Error('Oh noooooo');
};
