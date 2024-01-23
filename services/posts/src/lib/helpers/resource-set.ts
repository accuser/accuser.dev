export default class ResourceSet extends Set {
	/**
	 * Appends a new element with a specified value to the end of the Set.
	 */
	add(object: { id: string } | { id: string }[] | undefined) {
		[object].flat().forEach((obj) => {
			if (obj) {
				for (let item of this) if (this.compare(obj, item)) return this;
				super.add.call(this, obj);
			}
		});

		return this;
	}

	private compare(object: { id: string }, { id }: { id: string }) {
		return object.id === id;
	}
}
