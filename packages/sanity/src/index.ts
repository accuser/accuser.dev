import buildSanity from '$lib/builders/build-sanity.js';
import buildQueries from '$lib/builders/build-queries.js';
import { Category } from '@packages/category';
import { Post } from '@packages/post';
import { Person } from '@packages/person';

declare module 'express-serve-static-core' {
	interface Locals {
		queries: {
			fetchCategories: () => Promise<Category[]>;
			fetchCategory: (id: string) => Promise<Category>;
			fetchCategoryBySlug: (slug: string) => Promise<Category>;
			fetchLatestPost: () => Promise<Post>;
			fetchPeople: () => Promise<Person[]>;
			fetchPerson: (id: string) => Promise<Person>;
			fetchPersonBySlug: (slug: string) => Promise<Person>;
			fetchPost: (id: string) => Promise<Post>;
			fetchPostBySlug: (slug: string) => Promise<Post>;
			fetchPosts: () => Promise<Post[]>;
			fetchRecentPosts: () => Promise<Post[]>;
		};
	}
}

export default () => {
	const sanity = buildSanity();
	const queries = buildQueries(sanity);

	return ((req, res, next) => {
		req.app.locals.queries = queries;

		next();
	}) as import('express').RequestHandler;
};

export type { Category, Person, Post };
