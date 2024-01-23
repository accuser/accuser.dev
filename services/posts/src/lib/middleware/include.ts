import type QueryString from 'qs';

const SEPARATOR = /[^a-z_]+/i;

/**
 * Normalise any `include` query parameter(s) into a single comma-separated
 * equivalent query parameter string.
 *
 * @example
 * // return `subscriptions`
 * normalise("subscriptions");
 *
 * @example
 * // return `invoices,payment_methods`
 * normalise(["payment_methods", "invoices"]);
 */
const normalise = ((include) =>
	[...new Set([include].flat().join(',').toLowerCase().split(SEPARATOR))].sort().join(',')) as (
	include: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[]
) => string;

/**
 * Parse and normalise the `include` query parameter.
 */
export default ((req, res, next) => {
	void res;

	const {
		query: { include }
	} = req;

	if (include) {
		req.query.include = normalise(include);
	}

	next();
}) as import('express').RequestHandler;
