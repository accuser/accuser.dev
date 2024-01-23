import type { Error } from "./error.js";
import { JSONValue } from "./json-value.js";
import type { Link } from "./link.js";
import type { IdentifiedResource, Resource } from "./resource.js";

type ErrorDocument = { errors: Error; meta?: Record<string, JSONValue> };

type RelationshipType<T extends Resource<string>> = T extends {
	relationships: Record<string, { data: IdentifiedResource<infer R> | null }>;
}
	? R
	: never;

type ResourceDocument<T extends Resource<string>> = {
	data: T | T[] | null;
	links?: Record<string, Link>;
	included?: Resource<RelationshipType<T>>[];
	meta?: Record<string, JSONValue>;
};

export type Document<T extends Resource<string>> =
	| ErrorDocument
	| ResourceDocument<T>;
