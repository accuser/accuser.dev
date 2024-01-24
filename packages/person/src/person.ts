import type { JSONValue, Link } from '@packages/json-api';
import type { PortableTextBlock } from '@portabletext/types';
import type { PersonDocument } from './person-document.js';
import type { PersonReference } from './person-reference.js';

export interface PersonLike {
	readonly type: 'people';
	readonly id: string;
}

export type Person = Readonly<
	PersonLike & {
		attributes: {
			bio: PortableTextBlock;
			name: string;
		};
		links: Record<string, Link>;
		meta: Record<string, JSONValue>;
	}
>;

export namespace Person {
	export const from = ({
		_id,
		_createdAt,
		_rev,
		_updatedAt,
		bio,
		name,
		slug
	}: PersonDocument): Person => ({
		type: 'people',
		id: _id,
		attributes: {
			bio,
			name
		},
		links: {
			self: `/people/${slug.current}`
		},
		meta: {
			createdAt: _createdAt,
			updatedAt: _updatedAt,
			revision: _rev
		}
	});

	export const fromReference = ({ _ref }: PersonReference): PersonLike => ({
		type: 'people',
		id: _ref
	});

	export const is = (value?: any): value is Person =>
		value !== null && value?.id !== null && value?.id !== undefined && value?.type === 'people';
}
