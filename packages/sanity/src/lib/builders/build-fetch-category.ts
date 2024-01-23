import type { SanityClient } from '@sanity/client';
import { CategoryDocument } from '$lib/types/category-document.js';

export default (sanity: SanityClient) => (id: string) => {
	if (id === null || id === undefined) {
		throw new Error('`id` is required');
	}

	return sanity.fetch<CategoryDocument>(
		`*[_type == "category" && defined(slug.current) && id == $id][0]`,
		{ id }
	);
};
