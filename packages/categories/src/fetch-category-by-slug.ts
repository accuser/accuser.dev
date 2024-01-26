import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { Category, type CategoryDocument } from '@packages/category';

const QUERY = groq`*[_type == "category" && slug.current == $slug][0]`;

export default (sanity: SanityClient) =>
	(async (slug) => {
		if (slug === null || slug === undefined) {
			throw new Error('`slug` is required');
		}

		const document = await sanity.fetch<CategoryDocument>(QUERY, {
			slug
		});

		if (document) {
			const category = Category.from(document);

			return { data: category };
		}
	}) as (slug: string) => Promise<{ data: Category }>;
