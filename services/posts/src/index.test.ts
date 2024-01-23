import { describe, expect, it } from 'vitest';
import request from 'supertest';
import posts from './index.js';

describe('GET /posts', () => {
	it('should succeed', async () => {
		await request(posts)
			.get('/posts')
			.expect(200)
			.expect('Content-Type', 'application/vnd.api+json; charset=utf-8');
	});
});

describe('GET /posts/latest', () => {
	it('should succeed', async () => {
		await request(posts)
			.get('/posts/latest')
			.expect(200)
			.expect('Content-Type', 'application/vnd.api+json; charset=utf-8');
	});
});

describe('GET /posts/recent', () => {
	it('should succeed', async () => {
		await request(posts)
			.get('/posts/recent')
			.expect(200)
			.expect('Content-Type', 'application/vnd.api+json; charset=utf-8')
			.then(({ body }) => console.log(body));
	});
});

describe('GET /posts/hello-world', () => {
	it('should succeed', async () => {
		await request(posts)
			.get('/posts/hello-world')
			.expect(200)
			.expect('Content-Type', 'application/vnd.api+json; charset=utf-8');
	});
});
