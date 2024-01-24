import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { PersonDocument } from './person-document.js';
import { Person } from './person.js';

const QUERY = groq`*[_type == "person" && defined(slug.current) && id == $id][0]`;

export default (sanity: SanityClient) => (id: string) => {
	if (id === null || id === undefined) {
		throw new Error('`id` is required');
	}

	return sanity.fetch<PersonDocument>(QUERY, { id }).then(Person.from);
};
