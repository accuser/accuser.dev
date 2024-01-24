import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { CategoryDocument } from './category-document.js';
import { Category } from './category.js';

const QUERY = groq`*[_type == "category" && slug.current == $slug][0]`;

export default (sanity: SanityClient) => (slug: string) => {
	if (slug === null || slug === undefined) {
		throw new Error('`slug` is required');
	}

	return sanity.fetch<CategoryDocument>(QUERY, { slug }).then(Category.from);
};
