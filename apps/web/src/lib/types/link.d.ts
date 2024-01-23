export type Link =
	| string
	| {
		href: string;
		rel?: string;
		describedby?: Link;
		title?: string;
		type?: string;
		hreflang?: string;
		meta?: Record<string, string>;
	};