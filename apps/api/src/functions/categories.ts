import { builder, type Handler } from '@netlify/functions';
import categories from '@services/categories';
import serverless from 'serverless-http';

export const handler = builder(serverless(categories, { provider: 'aws' }) as unknown as Handler);
