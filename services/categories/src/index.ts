import DEV from '$lib/config/dev.js';
import getPosts from '$lib/handlers/get-categories.js';
import getPost from '$lib/handlers/get-category.js';
import error from '$lib/middleware/error.js';
import include from '$lib/middleware/include.js';
import sanity from '@packages/sanity';
import express from 'express';
import helmet from 'helmet';
import { pinoHttp } from 'pino-http';
import qs from 'qs';

const PATH = DEV ? '/.netlify/functions/posts' : '/posts';

const router = express.Router().get('/', getPosts).get('/:id', getPost);

export default express()
	.use(helmet)
	.set('query parser', (s: string) => qs.parse(decodeURIComponent(s), { comma: true }))
	.use(pinoHttp({ autoLogging: false }))
	.use(include)
	.use(sanity)
	.use(PATH, router)
	.use(error);
