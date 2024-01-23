import {codeInput} from '@sanity/code-input';
import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {netlifyTool} from 'sanity-plugin-netlify';
import {tags} from 'sanity-plugin-tags';
import {structureTool} from 'sanity/structure';
import {schemaTypes} from './schemas';

export default defineConfig({
	name: 'default',
	title: 'accuser.dev',

	projectId: 'iwmz28mu',
	dataset: 'production',

	plugins: [
		codeInput(),
		structureTool(),
		tags({}),
		visionTool(),
		netlifyTool(),
	],

	schema: {
		types: schemaTypes,
	},
});
