import type { SanityClient } from '@sanity/client';
import { PostDocument } from '$lib/types/post-document.js';

export default (sanity: SanityClient) => (id: string) => {
	if (id === null || id === undefined) {
		throw new Error('`id` is required');
	}

	return sanity.fetch<PostDocument>(`*[_type == "post" && defined(slug.current) && id == $id][0]`, {
		id
	});
};
