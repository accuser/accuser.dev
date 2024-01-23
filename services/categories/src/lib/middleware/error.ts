export default ((err, req, res, next) => {
	const { log } = req;

	log.error(err.stack);

	if (res.headersSent) {
		next(err);
	} else {
		res.sendStatus(500);
	}
}) as import('express').ErrorRequestHandler;
