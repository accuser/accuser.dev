import { TypedResource } from "./typed-resource.js";

export interface LocallyIdentifiedResource<T extends string = string>
	extends TypedResource<T> {
	id?: never;
	lid?: string;
}

export namespace LocallyIdentifiedResource {
	export const from = <T extends string>({
		type,
		lid,
	}: {
		type: T;
		lid?: string;
	}) => ({ type, lid });

	export const is = <T extends string>(
		value: any,
		type: T
	): value is LocallyIdentifiedResource<T> => TypedResource.is(value, type);
}
