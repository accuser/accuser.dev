import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { Person, type PersonDocument } from '@packages/person';

const QUERY = groq`*[_type == "person" && slug.current == $slug][0]`;

export default (sanity: SanityClient) =>
	(async (slug) => {
		if (slug === null || slug === undefined) {
			throw new Error('`slug` is required');
		}

		const document = await sanity.fetch<PersonDocument>(QUERY, { slug });

		if (document) {
			const person = Person.from(document);

			return { data: person };
		}
	}) as (slug: string) => Promise<{ data: Person }>;
