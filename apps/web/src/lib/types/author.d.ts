interface Author {
	type: 'authors';
	id: string;
	attributes: {
		bio: import('@portabletext/types').PortableTextBlock;
		name: string;
		slug: string;
	};
	links: Record<string, Link>;
	meta?: Record<string, string>;
}
