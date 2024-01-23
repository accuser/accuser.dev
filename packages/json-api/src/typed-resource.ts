export interface TypedResource<T extends string = string> {
	type: T;
}

export namespace TypedResource {
	export const from = <T extends string>(type: T) => ({
		type,
	});

	export const is = <T extends string>(
		value: any,
		type: T
	): value is TypedResource<T> =>
		value && typeof value === "object" && value.type === type;
}
