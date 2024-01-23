import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	try {
		const res = await fetch('https://api.accuser.dev/posts', {
			headers: {
				accept: 'application/vnd.api+json'
			}
		});

		if (res.ok) {
			const posts = await res.json();

			return { posts };
		}
	} catch {
		console.log('Failed to fetch posts');
	}

	return error(500);
}) satisfies PageServerLoad;
