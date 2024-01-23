export default class extends Boolean {
	static from(value?: boolean | null) {
		if (value === null || value === undefined) {
			return undefined;
		} else {
			return value;
		}
	}
}
