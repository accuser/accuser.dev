import type { SanityClient } from '@sanity/client';
import { PersonDocument } from '$lib/types/person-document.js';

export default (sanity: SanityClient) => (slug: string) => {
	if (slug === null || typeof slug === 'undefined') {
		throw new Error('`slug` is required');
	}

	return sanity.fetch<PersonDocument>(`*[_type == "person" && slug.current == $slug][0]`, { slug });
};
