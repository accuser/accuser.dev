import type { PortableTextBlock } from '@portabletext/types';
import type { SanityDocument } from '@sanity/client';

export type CategoryDocument = Readonly<
	SanityDocument<{
		description: PortableTextBlock;
		name: string;
		slug: {
			current: string;
		};
	}>
>;
