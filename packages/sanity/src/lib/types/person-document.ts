import { PortableTextBlock } from '@portabletext/types';
import { SanityDocument } from '@sanity/client';

export type PersonDocument = SanityDocument<{
	bio: PortableTextBlock;
	name: string;
	slug: {
		current: string;
	};
}>;
