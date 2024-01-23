import type { SanityClient } from '@sanity/client';
import { PersonDocument } from '$lib/types/person-document.js';

export default (sanity: SanityClient) => () =>
	sanity.fetch<PersonDocument[]>(
		`*[_type == "person" && defined(slug.current)] | order(_createdAt desc)`
	);
