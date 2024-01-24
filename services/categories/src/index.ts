import getCategories from '$lib/handlers/get-categories.js';
import getCategory from '$lib/handlers/get-category.js';
import error from '$lib/middleware/error.js';
import express from 'express';
import helmet from 'helmet';
import { pinoHttp } from 'pino-http';
import sanity from '@packages/sanity';
import qs from 'qs';

const router = express.Router();

export default express()
	.use(helmet())
	.set('query parser', (s: string) => qs.parse(decodeURIComponent(s), { comma: true }))
	.use(pinoHttp({ autoLogging: false }))
	.use(sanity())
	.get('/categories', getCategories)
	.get('/categories/:slug', getCategory)
	.use(error);
