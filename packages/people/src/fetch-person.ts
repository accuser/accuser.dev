import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { Person, type PersonDocument } from '@packages/person';

const QUERY = groq`*[_type == "person" && defined(slug.current) && _id == $id][0]`;

export default (sanity: SanityClient) =>
	(async (id) => {
		if (id === null || id === undefined) {
			throw new Error('`id` is required');
		}

		const document = await sanity.fetch<PersonDocument>(QUERY, { id });

		if (document) {
			const person = Person.from(document);

			return { data: person };
		}
	}) as (id: string) => Promise<{ data: Person }>;
