import type { IdentifiedResource } from "@packages/json-api/src/resource.js";

export default class extends Set {
	/**
	 * Appends a new element with a specified value to the end of the Set.
	 */
	add(value?: IdentifiedResource | IdentifiedResource[] | null) {
		[value].flat().forEach((v) => {
			if (v) {
				for (let item of this) if (this.compare(v, item)) return this;

				super.add.call(this, v);
			}
		});

		return this;
	}

	compact() {
		if (this.size) {
			return [...this];
		}
	}

	private compare(a: IdentifiedResource, b: IdentifiedResource) {
		return a.type === b.type && a.id === b.id;
	}
}
