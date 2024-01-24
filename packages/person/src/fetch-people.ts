import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { PersonDocument } from './person-document.js';
import { Person } from './person.js';

const QUERY = groq`*[_type == "person" && defined(slug.current)]`;

export default (sanity: SanityClient) => () =>
	sanity.fetch<PersonDocument[]>(QUERY).then((documents) => documents.map(Person.from));
