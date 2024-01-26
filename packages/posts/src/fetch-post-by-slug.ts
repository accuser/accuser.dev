import { Category } from '@packages/category';
import { Person } from '@packages/person';
import { Post, type PostDocument } from '@packages/post';
import type { SanityClient } from '@sanity/client';

// groq
const QUERY = `*[_type == "post" && defined(publishedAt) && slug.current == $slug][0] {
	...,
	"author": coalesce({ "author" in $include => author-> }, author),
	"category": coalesce({ "category" in $include => category-> }, category)
}`;

export default (sanity: SanityClient) =>
	(async (slug, { include = [] } = {}) => {
		if (slug === null || slug === undefined) {
			throw new Error('`slug` is required');
		}

		const document = await sanity.fetch<PostDocument>(QUERY, {
			slug,
			include: [...new Set(include)]
		});

		if (document) {
			const post = Post.from(document);

			const author = '_id' in document.author ? Person.from(document.author) : undefined;
			const category = '_id' in document.category ? Category.from(document.category) : undefined;

			return {
				data: post,
				included: author || category ? { author, category } : undefined
			};
		}
	}) as (
		slug: string,
		opts?: { include?: Post.Relationships[] }
	) => Promise<{ data: Post; included?: { author?: Person; category?: Category } }>;
