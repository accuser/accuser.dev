import type { JSONValue } from "./json-value.js";

/**
 * @see {@link https://jsonapi.org/format/#document-links}
 */
export type Link =
	| string
	| {
			href: string;
			rel?: string;
			describedby?: Link;
			title?: string;
			type?: string;
			hreflang?: string;
			meta?: Record<string, JSONValue>;
	  }
	| null;
