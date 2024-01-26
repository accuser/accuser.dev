import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { Category, type CategoryDocument } from '@packages/category';

const QUERY = groq`*[_type == "category" && defined(slug.current) && _id == $id][0]`;

export default (sanity: SanityClient) =>
	(async (id) => {
		if (id === null || id === undefined) {
			throw new Error('`slug` is required');
		}

		const document = await sanity.fetch<CategoryDocument>(QUERY, {
			id
		});

		if (document) {
			const category = Category.from(document);

			return { data: category };
		}
	}) as (id: string) => Promise<{ data: Category }>;
