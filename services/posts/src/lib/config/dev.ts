const { NETLIFY_DEV } = process.env as Record<string, string>;

export default NETLIFY_DEV === 'true';
