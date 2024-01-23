const { NETLIFY_DEV, SANITY_DATASET, SANITY_PROJECT_ID } =
	process.env as Record<string, string>;

const DEV = NETLIFY_DEV === "true";

export { DEV, SANITY_DATASET, SANITY_PROJECT_ID };
