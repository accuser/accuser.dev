import { type CategoryLike } from '@packages/category';
import type { JSONValue, Link } from '@packages/json-api';
import { type PersonLike } from '@packages/person';
import type { PortableTextBlock } from '@portabletext/types';
import type { PostDocument } from './post-document.js';
import type { PostReference } from './post-reference.js';

export interface PostLike {
	readonly type: 'posts';
	readonly id: string;
}

export type Post = Readonly<
	PostLike & {
		attributes?: {
			body?: PortableTextBlock;
			lede?: PortableTextBlock;
			publishedAt?: string;
			tags: { label: string; value: string }[];
			title?: string;
		};
		links?: Record<string, Link>;
		meta?: Record<string, JSONValue>;
		relationships?: {
			author?: {
				data: PersonLike;
				links: Record<string, Link>;
			};
			category?: {
				data: CategoryLike;
				links: Record<string, Link>;
			};
		};
	}
>;

export namespace Post {
	export type Relationships = 'author' | 'category';

	export const from = (document: PostDocument): Post => {
		if (document === null || document === undefined) {
			throw new Error('`document` cannot be null or undefined');
		}

		const {
			_id,
			_type,
			_createdAt,
			_rev,
			_updatedAt,
			author,
			category,
			slug: { current: slug },
			...attributes
		} = document;

		void [_type, _createdAt, _rev, _updatedAt];

		return {
			type: 'posts',
			id: _id,
			attributes,
			links: {
				self: `/posts/${slug}`
			},
			relationships: {
				author: {
					data: {
						type: 'people',
						id: '_ref' in author ? author._ref : author._id
					},
					links: {
						self: `/posts/${slug}/relationships/author`,
						related: `/posts/${slug}/author`
					}
				},
				category: {
					data: {
						type: 'categories',
						id: '_ref' in category ? category._ref : category._id
					},
					links: {
						self: `/posts/${slug}/relationships/category`,
						related: `/posts/${slug}/category`
					}
				}
			}
		};
	};

	export const fromReference = ({ _ref }: PostReference): PostLike => ({
		type: 'posts',
		id: _ref
	});

	export const is = (value?: PostLike): value is Post =>
		value?.id !== null && value?.id !== undefined && value?.type === 'posts';
}
