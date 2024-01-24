import {codeInput} from '@sanity/code-input';
import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {netlifyTool} from 'sanity-plugin-netlify';
import {tags} from 'sanity-plugin-tags';
import {structureTool} from 'sanity/structure';
import {schemaTypes} from './schemas';
import {
	unsplashImageAsset,
	unsplashAssetSource,
} from 'sanity-plugin-asset-source-unsplash';

export default defineConfig({
	name: 'default',
	title: 'accuser.dev',

	projectId: 'iwmz28mu',
	dataset: 'production',

	plugins: [
		codeInput(),
		tags({}),
		unsplashImageAsset(),
		structureTool(),
		visionTool(),
		netlifyTool(),
	],
	form: {
		image: {
			assetSources: (previousAssetSources, {schema}) => {
				if (schema.name === 'movie-image') {
					// remove unsplash from movie-image types
					return previousAssetSources.filter(
						(assetSource) => assetSource !== unsplashAssetSource,
					);
				}
				return previousAssetSources;
			},
		},
	},
	schema: {
		types: schemaTypes,
	},
});
