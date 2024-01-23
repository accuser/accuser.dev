import getImage from '$lib/handlers/get-image.js';
import { builder } from '@netlify/functions';

export const handler = builder(getImage);
