import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { env } from 'process';

const { SANITY_DATASET, SANITY_PROJECT_ID } = env as Record<string, string>;

const urlFor = (source: SanityImageSource) =>
	imageUrlBuilder({
		dataset: SANITY_DATASET,
		projectId: SANITY_PROJECT_ID
	}).image(source);

export default urlFor;
