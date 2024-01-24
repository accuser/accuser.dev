import { JSONValue, Link } from '@packages/json-api';

export type Category = {
	id: string;

	type: 'categories';

	attributes: {
		description: import('@portabletext/types').PortableTextBlock;
		name: string;
	};

	links: Record<string, Link>;

	meta?: Record<string, JSONValue>;
};
