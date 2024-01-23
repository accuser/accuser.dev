import { builder, type Handler } from '@netlify/functions';
import people from '@services/people';
import serverless from 'serverless-http';

export const handler = builder(serverless(people, { provider: 'aws' }) as unknown as Handler);
