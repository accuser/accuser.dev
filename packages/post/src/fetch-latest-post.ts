import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { PostDocument } from './post-document.js';
import { Post } from './post.js';

const QUERY = groq`*[_type == "post" && defined(publishedAt)] | order(publishedAt desc)[0]`;

export default (sanity: SanityClient) => () => {
	return sanity.fetch<PostDocument>(QUERY).then(Post.from);
};
