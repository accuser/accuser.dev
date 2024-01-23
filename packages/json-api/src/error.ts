import { JSONValue } from "./json-value.js";
import { Link } from "./link.js";

export type Error = {
	/**
	 * Unique identifier for this particular occurrence of the problem.
	 */
	id?: string;

	/**
	 * Application-specific error code, expressed as a string value.
	 */
	code?: string;

	/**
	 * Human-readable explanation specific to this occurrence of the problem.
	 * Like `title`, this field’s value can be localized.
	 */
	detail?: string;

	/**
	 * Optional links object.
	 */
	links?: {
		/**
		 * Link that leads to further details about this particular occurrence of
		 * the problem.
		 */
		about?: Link;

		/**
		 * Link that identifies the type of error that this particular error is an
		 * instance of. This URI should be dereferencable to a human-readable
		 * explanation of the general error.
		 */
		type?: Link;
	};

	/**
	 * Reference(s) to the primary source of the error.
	 */
	source?: {
		/**
		 * String indicating the name of a single request header which caused the
		 * error.
		 */
		header?: string;

		/**
		 * String indicating which URI query parameter caused the error.
		 */
		parameter?: string;

		/**
		 * JSON Pointer [RFC6901](https://tools.ietf.org/html/rfc6901) to the value
		 * in the request document that caused the error (e.g., `"/data"` for a
		 * primary data object, or `"/data/attributes/title"` for a specific
		 * attribute). This must point to a value in the request document that
		 * exists; if it doesn’t, the client should simply ignore the pointer.
		 */
		pointer?: string;
	};

	/**
	 * HTTP status code applicable to this problem, expressed as a string value.
	 */
	status: string;

	/**
	 * Short, human-readable summary of the problem that should not change from
	 * occurrence to occurrence of the problem, except for purposes of
	 * localization.
	 */
	title?: string;

	/**
	 * Non-standard meta-information about the error.
	 */
	meta?: Record<string, JSONValue>;
};
