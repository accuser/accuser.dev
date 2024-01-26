import { Person, type PersonDocument } from '@packages/person';
import type { SanityClient } from '@sanity/client';
import groq from 'groq';

const QUERY = groq`*[_type == "person" && defined(slug.current)]`;

export default (sanity: SanityClient) =>
	(async () => {
		const documents = await sanity.fetch<PersonDocument[]>(QUERY);

		const people = documents.map(Person.from);

		return { data: people };
	}) as () => Promise<{ data: Person[] }>;
