import { TypedResource } from "./typed-resource.js";

export interface IdentifiedResource<T extends string = string>
	extends TypedResource<T> {
	id: string;
	lid?: never;
}

export namespace IdentifiedResource {
	export const from = <T extends string>({
		type,
		id,
	}: {
		type: T;
		id: string;
	}) => {
		if (id === null || id === undefined) {
			//do nothing
		} else {
			return { id, type };
		}
	};

	export const is = <T extends string>(
		value: any,
		type: T
	): value is IdentifiedResource<T> =>
		value &&
		typeof value === "object" &&
		typeof value.id === "string" &&
		TypedResource.is(value, type);
}
