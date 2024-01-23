import { IdentifiedResource } from "./identified-resource.js";
import { LocallyIdentifiedResource } from "./locally-identified-resource.js";

export type Resource<T extends string> =
	| IdentifiedResource<T>
	| LocallyIdentifiedResource<T>;

export namespace Resource {
	export const from = <T extends string>({
		type,
		id,
		lid,
	}:
		| { type: T; id: string; lid?: never }
		| { type: T; id?: never; lid?: string }) => {
		if (id && lid) {
			throw new Error("`id` and `lid` cannot be both defined");
		} else if (id) {
			return IdentifiedResource.from({ type, id });
		} else {
			return LocallyIdentifiedResource.from({ type, lid });
		}
	};

	export const is = <T extends string>(
		value: any,
		type: T
	): value is Resource<T> =>
		IdentifiedResource.is(value, type) ??
		LocallyIdentifiedResource.is(value, type);
}
