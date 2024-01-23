import type { SanityClient } from '@sanity/client';
import { CategoryDocument } from '$lib/types/category-document.js';

export default (sanity: SanityClient) => () =>
	sanity.fetch<CategoryDocument[]>(`*[_type == "category" && defined(slug.current)] | order(name asc)`);
