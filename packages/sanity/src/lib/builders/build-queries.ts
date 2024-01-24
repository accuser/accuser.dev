import {
	fetchCategories,
	fetchCategory,
	fetchCategoryBySlug,
	type Category
} from '@packages/category';
import { fetchPeople, fetchPerson, fetchPersonBySlug, type Person } from '@packages/person';
import {
	fetchLatestPost,
	fetchPost,
	fetchPostBySlug,
	fetchPosts,
	fetchRecentPosts,
	type Post
} from '@packages/post';
import { SanityClient } from '@sanity/client';

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

export default (sanity: SanityClient) => ({
	fetchCategories: fetchCategories(sanity),
	fetchCategory: fetchCategory(sanity),
	fetchCategoryBySlug: fetchCategoryBySlug(sanity),
	fetchLatestPost: fetchLatestPost(sanity),
	fetchPeople: fetchPeople(sanity),
	fetchPersonBySlug: fetchPersonBySlug(sanity),
	fetchPerson: fetchPerson(sanity),
	fetchPost: fetchPost(sanity),
	fetchPostBySlug: fetchPostBySlug(sanity),
	fetchPosts: fetchPosts(sanity),
	fetchRecentPosts: fetchRecentPosts(sanity)
});
