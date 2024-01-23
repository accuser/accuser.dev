import DEV from '$lib/config/dev.js';
import getPeople from '$lib/handlers/get-people.js';
import getPerson from '$lib/handlers/get-person.js';
import error from '$lib/middleware/error.js';
import include from '$lib/middleware/include.js';
import sanity from '@packages/sanity';
import express from 'express';
import helmet from 'helmet';
import { pinoHttp } from 'pino-http';
import qs from 'qs';

const PATH = DEV ? '/.netlify/functions/posts' : '/posts';

const router = express.Router().get('/', getPeople).get('/:id', getPerson);

export default express()
	.use(helmet)
	.set('query parser', (s: string) => qs.parse(decodeURIComponent(s), { comma: true }))
	.use(pinoHttp({ autoLogging: false }))
	.use(include)
	.use(sanity)
	.use(PATH, router)
	.use(error);
