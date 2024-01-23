/**
 * Handle `GET /:slug` request
 */
export default (async (req, res, next) => {
	const {
		app: {
			locals: {
				queries: { fetchPerson }
			}
		},
		params: { slug }
	} = req;

	try {
		const response = await fetchPerson(slug);

		if (response) {
			res
				.status(200)
				.header('content-type', 'application/vnd.api+json; charset="utf-8"')
				.json(response);
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		next(err);
	}
}) as import('express').RequestHandler<{ slug: string }>;
