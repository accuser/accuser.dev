export default class extends Number {
	static from(value?: number | null) {
		if (value === null || value === undefined) {
			return undefined;
		} else {
			return value;
		}
	}
}
