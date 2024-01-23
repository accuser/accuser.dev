import { builder, type Handler } from '@netlify/functions';
import posts from '@services/posts';
import serverless from 'serverless-http';

export const handler = builder(serverless(posts, { provider: 'aws' }) as unknown as Handler);
