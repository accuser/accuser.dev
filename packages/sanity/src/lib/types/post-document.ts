import { PortableTextBlock } from '@portabletext/types';
import { SanityDocument, SanityReference } from '@sanity/client';
import { CategoryDocument } from './category-document.js';
import { PersonDocument } from './person-document.js';

export type PostDocument = SanityDocument<{
	author: SanityReference | PersonDocument;
	body: PortableTextBlock;
	category: SanityReference | CategoryDocument;
	slug: {
		current: string;
	};
	tags: string[];
	title: string;
}>;
