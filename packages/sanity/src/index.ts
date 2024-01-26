import buildSanity from '$lib/builders/build-sanity.js';
import * as categories from '@packages/categories';
import * as people from '@packages/people';
import * as posts from '@packages/posts';

type FunctionReturnTypes<T> = {
	[K in keyof T]: T[K] extends (...args: any[]) => any ? ReturnType<T[K]> : never;
};

declare module 'express-serve-static-core' {
	interface Locals {
		queries: FunctionReturnTypes<typeof categories> &
			FunctionReturnTypes<typeof people> &
			FunctionReturnTypes<typeof posts>;
	}
}

export default () => {
	const sanity = buildSanity();

	return ((req, res, next) => {
		req.app.locals.queries = {
			fetchCategories: categories.fetchCategories(sanity),
			fetchCategory: categories.fetchCategory(sanity),
			fetchCategoryBySlug: categories.fetchCategoryBySlug(sanity),

			fetchPeople: people.fetchPeople(sanity),
			fetchPersonBySlug: people.fetchPersonBySlug(sanity),
			fetchPerson: people.fetchPerson(sanity),

			fetchLatestPost: posts.fetchLatestPost(sanity),
			fetchPost: posts.fetchPost(sanity),
			fetchPostBySlug: posts.fetchPostBySlug(sanity),
			fetchPosts: posts.fetchPosts(sanity),
			fetchRecentPosts: posts.fetchRecentPosts(sanity)
		};

		next();
	}) as import('express').RequestHandler;
};
