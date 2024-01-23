interface Post {
	type: 'posts';
	id: string;
	attributes: {
		title: string;
		body: import('@portabletext/types').PortableTextBlock;
		slug: string;
		tags: string[];
	};
	links: Record<string, Link>;
	meta?: Record<string, string>;
	relationships: {
		author: Relationship<'authors'>;
		category: Relationship<'categories'>;
	};
}

type Relationship<T extends string> = {
	data: {
		type: T;
		id: string;
	};
	links: {
		self: Link;
		related: Link;
	};
};
