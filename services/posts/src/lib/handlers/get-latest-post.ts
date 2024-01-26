/**
 * Handle `GET /posts/latest` request
 */
export default (async (req, res, next) => {
	const {
		app: {
			locals: {
				queries: { fetchLatestPost }
			}
		}
	} = req;

	try {
		const response = await fetchLatestPost({ include: ['author', 'category'] });

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
}) as import('express').RequestHandler;
