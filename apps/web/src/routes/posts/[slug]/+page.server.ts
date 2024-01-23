import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params: { slug } }) => {
	try {
		const res = await fetch(`https://api.accuser.dev/posts/${slug}`, {
			headers: {
				accept: 'application/vnd.api+json'
			}
		});

		if (res.ok) {
			const post = await res.json();

			return { post };
		}
	} catch {
		console.log('Failed to fetch posts');
	}

	return error(500);
}) satisfies PageServerLoad;
