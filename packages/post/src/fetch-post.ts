import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { PostDocument } from './post-document.js';
import { Post } from './post.js';

const QUERY = groq`*[_type == "post" && defined(publishedAt) && id == $id][0]`;

export default (sanity: SanityClient) => (id: string) => {
	if (id === null || id === undefined) {
		throw new Error('`id` is required');
	}

	return sanity.fetch<PostDocument>(QUERY, { id }).then(Post.from);
};
