import getPeople from '$lib/handlers/get-people.js';
import getPerson from '$lib/handlers/get-person.js';
import error from '$lib/middleware/error.js';
import sanity from '@packages/sanity';
import express from 'express';
import helmet from 'helmet';
import { pinoHttp } from 'pino-http';
import qs from 'qs';

export default express()
	.use(helmet())
	.set('query parser', (s: string) => qs.parse(decodeURIComponent(s), { comma: true }))
	.use(pinoHttp({ autoLogging: false }))
	.use(sanity())
	.get('/people', getPeople)
	.get('/people/:slug', getPerson)
	.use(error);
