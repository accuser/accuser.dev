import type { CategoryDocument, CategoryReference } from '@packages/category';
import type { PersonDocument, PersonReference } from '@packages/person';
import type { PortableTextBlock } from '@portabletext/types';
import type { SanityDocument } from '@sanity/client';

export type PostDocument = Readonly<
	SanityDocument<{
		author: PersonDocument | PersonReference;
		body: PortableTextBlock;
		category: CategoryDocument | CategoryReference;
		lede: PortableTextBlock;
		title: string;
		publishedAt: string;
		slug: {
			current: string;
		};
		tags: string[];
	}>
>;
