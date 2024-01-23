import buildFetchCategories from '$lib/builders/build-fetch-categories.js';
import buildFetchCategoryBySlug from '$lib/builders/build-fetch-category-by-slug.js';
import buildFetchCategory from '$lib/builders/build-fetch-category.js';
import buildFetchLatestPost from '$lib/builders/build-fetch-latest-post.js';
import buildFetchPeople from '$lib/builders/build-fetch-people.js';
import buildFetchPersonBySlug from '$lib/builders/build-fetch-person-by-slug.js';
import buildFetchPerson from '$lib/builders/build-fetch-person.js';
import buildFetchPostBySlug from '$lib/builders/build-fetch-post-by-slug.js';
import buildFetchPost from '$lib/builders/build-fetch-post.js';
import buildFetchPosts from '$lib/builders/build-fetch-posts.js';
import buildFetchRecentPosts from '$lib/builders/build-fetch-recent-posts.js';
import buildSanity from '$lib/builders/build-sanity.js';
import { type CategoryDocument } from '$lib/types/category-document.js';
import { type PersonDocument } from '$lib/types/person-document.js';
import { type PostDocument } from '$lib/types/post-document.js';

declare module 'express-serve-static-core' {
	interface Locals {
		queries: {
			fetchCategory: (id: string) => Promise<CategoryDocument>;
			fetchCategoryBySlug: (slug: string) => Promise<CategoryDocument>;
			fetchCategories: () => Promise<CategoryDocument[]>;
			fetchLatestPost: () => Promise<PostDocument>;
			fetchPerson: (id: string) => Promise<PersonDocument>;
			fetchPersonBySlug: (slug: string) => Promise<PersonDocument>;
			fetchPeople: () => Promise<PersonDocument[]>;
			fetchPost: (id: string) => Promise<PostDocument>;
			fetchPostBySlug: (slug: string) => Promise<PostDocument>;
			fetchPosts: () => Promise<PostDocument[]>;
			fetchRecentPosts: () => Promise<PostDocument[]>;
		};
	}
}

export default ((req, res, next) => {
	const sanity = buildSanity();

	if (sanity) {
		req.app.locals.queries = {
			fetchCategory: buildFetchCategory(sanity),
			fetchCategoryBySlug: buildFetchCategoryBySlug(sanity),
			fetchCategories: buildFetchCategories(sanity),
			fetchLatestPost: buildFetchLatestPost(sanity),
			fetchPersonBySlug: buildFetchPersonBySlug(sanity),
			fetchPerson: buildFetchPerson(sanity),
			fetchPeople: buildFetchPeople(sanity),
			fetchPost: buildFetchPost(sanity),
			fetchPostBySlug: buildFetchPostBySlug(sanity),
			fetchPosts: buildFetchPosts(sanity),
			fetchRecentPosts: buildFetchRecentPosts(sanity)
		};

		next();
	} else {
		next('sanity middleware not in use');
	}
}) as import('express').RequestHandler;

export { CategoryDocument, PersonDocument, PostDocument };
