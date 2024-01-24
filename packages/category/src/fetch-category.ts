import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { CategoryDocument } from './category-document.js';
import { Category } from './category.js';

const QUERY = groq`*[_type == "category" && defined(slug.current) && id == $id][0]`;

export default (sanity: SanityClient) => (id: string) => {
	if (id === null || id === undefined) {
		throw new Error('`id` is required');
	}

	return sanity.fetch<CategoryDocument>(QUERY, { id }).then(Category.from);
};
