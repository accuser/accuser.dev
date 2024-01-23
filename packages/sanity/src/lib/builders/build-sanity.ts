import { createClient, type ClientConfig, type ClientPerspective } from '@sanity/client';
import { env } from 'process';

const {
	NETLIFY_DEV,
	SANITY_API_VERSION = new Date().toISOString().split('T')[0],
	SANITY_DATASET = 'production',
	SANITY_PERSPECTIVE = 'published',
	SANITY_PROJECT_ID,
	SANITY_TOKEN,
	SANITY_USE_CDN = `${NETLIFY_DEV !== 'true'}`
} = env as Record<string, string>;

export default ({
	apiVersion = SANITY_API_VERSION,
	dataset = SANITY_DATASET,
	perspective = SANITY_PERSPECTIVE as ClientPerspective,
	projectId = SANITY_PROJECT_ID,
	token = SANITY_TOKEN,
	useCdn = SANITY_USE_CDN !== 'true'
}: ClientConfig = {}) =>
	createClient({
		apiVersion,
		dataset,
		perspective,
		projectId,
		token,
		useCdn
	});
