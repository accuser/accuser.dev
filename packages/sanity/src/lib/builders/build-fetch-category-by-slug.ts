import type { SanityClient } from '@sanity/client';
import { CategoryDocument } from '$lib/types/category-document.js';

export default (sanity: SanityClient) => (slug: string) => {
	if (slug === null || slug === undefined) {
		throw new Error('`slug` is required');
	}

	return sanity.fetch<CategoryDocument>(`*[_type == "category" && slug.current == $slug][0]`, {
		slug
	});
};
