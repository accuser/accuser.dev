import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { PostDocument } from './post-document.js';
import { Post } from './post.js';

const QUERY = groq`*[_type == "post" && defined(publishedAt)]`;

export default (sanity: SanityClient) => () =>
	sanity.fetch<PostDocument[]>(QUERY).then((documents) => documents.map(Post.from));
