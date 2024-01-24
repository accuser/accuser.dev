import getLatestPost from '$lib/handlers/get-latest-post.js';
import getPost from '$lib/handlers/get-post.js';
import getPosts from '$lib/handlers/get-posts.js';
import getRecentPosts from '$lib/handlers/get-recent-posts.js';
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
	.get('/posts', getPosts)
	.get('/posts/latest', getLatestPost)
	.get('/posts/recent', getRecentPosts)
	.get('/posts/:slug', getPost)
	.use(error);
