import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { CategoryDocument } from './category-document.js';
import { Category } from './category.js';

const QUERY = groq`*[_type == "category" && defined(slug.current)]`;

export default (sanity: SanityClient) => () =>
	sanity.fetch<CategoryDocument[]>(QUERY).then((documents) => documents.map(Category.from));
