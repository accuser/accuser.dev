import {defineField, defineType} from 'sanity';

export default defineType({
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'lede',
			title: 'Lede',
			type: 'text',
			rows: 3,
		}),
		defineField({
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: {type: 'person'},
		}),
		defineField({
			name: 'image',
			title: 'Cover image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'category',
			title: 'Category',
			type: 'reference',
			to: {type: 'category'},
		}),
		defineField({
			name: 'tags',
			title: 'Tags',
			type: 'tags',
			options: {
				includeFromRelated: 'tags',
			},
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		}),
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare(selection) {
			const {author} = selection;
			return {...selection, subtitle: author && `by ${author}`};
		},
	},
});
