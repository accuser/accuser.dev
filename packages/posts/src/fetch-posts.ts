import { Category } from '@packages/category';
import { Person } from '@packages/person';
import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { Post, type PostDocument } from '@packages/post';

// groq
const QUERY = `*[_type == "post" && defined(publishedAt)] {
	...,
	"author": coalesce({ "author" in $include => author-> }, author),
	"category": coalesce({ "category" in $include => category-> }, category)
}`;

export default (sanity: SanityClient) =>
	(async ({ include = [] } = {}) => {
		const documents = await sanity.fetch<PostDocument[]>(QUERY, { include: [...new Set(include)] });

		const posts = documents.map(Post.from);

		const authors = documents
			.map((document) => ('_id' in document.author ? Person.from(document.author) : undefined))
			.filter(Boolean);

		const categories = documents
			.map((document) =>
				'_id' in document.category ? Category.from(document.category) : undefined
			)
			.filter(Boolean);

		return {
			data: posts,
			included: authors.length || categories.length ? { authors, categories } : undefined
		};
	}) as (opts?: {
		include?: Post.Relationships[];
	}) => Promise<{ data: Post[]; included?: { author?: Person; category?: Category } }>;
