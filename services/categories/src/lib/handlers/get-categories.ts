/**
 * Handle `GET /` request.
 */
export default (async (req, res, next) => {
	const {
		app: {
			locals: {
				queries: { fetchCategories }
			}
		}
	} = req;

	try {
		const response = await fetchCategories();

		res
			.status(200)
			.header('content-type', 'application/vnd.api+json; charset="utf-8"')
			.json(response);
	} catch (err) {
		next(err);
	}
}) as import('express').RequestHandler;
