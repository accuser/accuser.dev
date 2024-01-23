import type { SanityClient } from '@sanity/client';
import { PostDocument } from '$lib/types/post-document.js';

export default (sanity: SanityClient) => () =>
	sanity.fetch<PostDocument[]>(`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`);
