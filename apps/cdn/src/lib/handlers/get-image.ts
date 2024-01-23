import urlFor from '$lib/config/url-for.js';
import { Handler } from '@netlify/functions';
import { request } from 'undici';

/**
 * GET /images/:id.jpg
 */
export default (async (event) => {
	const { id } = event.path.match(/\/images\/(?<id>.+)\.jpg$/)?.groups ?? {};
	console.log(event.path);
	console.log(id);
	if (id) {
		try {
			const url = urlFor(id).width(1280).height(720).fit('crop').url();
			const body = await request(url)
				.then((res) => res.body.arrayBuffer())
				.then((buf) => Buffer.from(buf).toString('base64'));

			return {
				statusCode: 200,
				headers: {
					'content-type': 'image/jpeg'
				},
				body,
				isBase64Encoded: true
			};
		} catch {
			return { statusCode: 404 };
		}
	} else {
		return { statusCode: 400 };
	}
}) as Handler;
