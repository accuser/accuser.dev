interface Category {
	type: 'categories';
	id: string;
	attributes: {
		name: string;
		slug: string;
	};
	links: Record<string, Link>;
	meta?: Record<string, string>;
}
