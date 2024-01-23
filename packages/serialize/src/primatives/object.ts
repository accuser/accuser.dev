export default class extends Object {
	static from(value?: object | null) {
		if (value === null || value === undefined) {
			return undefined;
		} else if (Object.keys(value).length === 0) {
			return undefined;
		} else {
			return value;
		}
	}
}
