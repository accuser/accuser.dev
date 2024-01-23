import type { SanityClient } from '@sanity/client';
import { PostDocument } from '$lib/types/post-document.js';

export default (sanity: SanityClient) => (slug: string) => {
	if (slug === null || slug === undefined) {
		throw new Error('`slug` is required');
	}

	return sanity.fetch<PostDocument>(`*[_type == "post" && slug.current == $slug][0]`, { slug });
};
