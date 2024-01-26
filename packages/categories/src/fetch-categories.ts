import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { Category, type CategoryDocument } from '@packages/category';

const QUERY = groq`*[_type == "category" && defined(slug.current)]`;

export default (sanity: SanityClient) =>
	(async () => {
		const documents = await sanity.fetch<CategoryDocument[]>(QUERY);

		const categories = documents.map(Category.from);

		return {
			data: categories
		};
	}) as () => Promise<{ data: Category[] }>;
