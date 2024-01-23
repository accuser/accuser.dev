export default class extends String {
	static from(value?: string | null) {
		if (value === null || value === undefined) {
			return undefined;
		} else {
			return value;
		}
	}
}
