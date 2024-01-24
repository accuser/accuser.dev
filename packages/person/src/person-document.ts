import type { PortableTextBlock } from '@portabletext/types';
import type { SanityDocument } from '@sanity/client';

export type PersonDocument = Readonly<
	SanityDocument<{
		bio: PortableTextBlock;
		name: string;
		slug: {
			current: string;
		};
	}>
>;
