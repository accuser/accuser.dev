import { PortableTextBlock } from '@portabletext/types';
import { SanityDocument } from '@sanity/client';

export type CategoryDocument = SanityDocument<{
	description: PortableTextBlock;
	name: string;
	slug: {
		current: string;
	};
}>;
