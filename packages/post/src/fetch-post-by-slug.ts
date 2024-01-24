import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { PostDocument } from './post-document.js';
import { Post } from './post.js';

const QUERY = groq`*[_type == "post" && defined(publishedAt) && slug.current == $slug][0]`;

export default (sanity: SanityClient) => (slug: string) => {
	if (slug === null || slug === undefined) {
		throw new Error('`slug` is required');
	}

	return sanity.fetch<PostDocument>(QUERY, { slug }).then(Post.from);
};
