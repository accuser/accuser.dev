import type { SanityClient } from '@sanity/client';
import { PersonDocument } from '$lib/types/person-document.js';

export default (sanity: SanityClient) => (id: string) => {
	if (id === null || typeof id === 'undefined') {
		throw new Error('`id` is required');
	}

	return sanity.fetch<PersonDocument>(
		`*[_type == "person" && defined(slug.current) && id == $id)][0]`,
		{ id }
	);
};
