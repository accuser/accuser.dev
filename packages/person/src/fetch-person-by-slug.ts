import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { PersonDocument } from './person-document.js';
import { Person } from './person.js';

const QUERY = groq`*[_type == "person" && slug.current == $slug][0]`;

export default (sanity: SanityClient) => (slug: string) => {
	if (slug === null || slug === undefined) {
		throw new Error('`slug` is required');
	}

	return sanity.fetch<PersonDocument>(QUERY, { slug }).then(Person.from);
};
