import type { JSONValue, Link } from '@packages/json-api';
import type { PortableTextBlock } from '@portabletext/types';
import type { CategoryDocument } from './category-document.js';
import { CategoryReference } from './category-reference.js';

export interface CategoryLike {
	readonly type: 'categories';
	readonly id: string;
}

export type Category = Readonly<
	CategoryLike & {
		attributes: {
			description: PortableTextBlock;
			name: string;
		};
		links: Record<string, Link>;
		meta: Record<string, JSONValue>;
	}
>;

export namespace Category {
	export const from = ({
		_id,
		_createdAt,
		_rev,
		_updatedAt,
		description,
		name,
		slug
	}: CategoryDocument): Category => ({
		type: 'categories',
		id: _id,
		attributes: {
			description,
			name
		},
		links: {
			self: `/categories/${slug.current}`
		},
		meta: {
			createdAt: _createdAt,
			updatedAt: _updatedAt,
			revision: _rev
		}
	});

	export const fromReference = ({ _ref }: CategoryReference): CategoryLike => ({
		type: 'categories',
		id: _ref
	});

	export const is = (value?: CategoryLike): value is Category =>
		value?.id !== null && value?.id !== undefined && value?.type === 'categories';
}
