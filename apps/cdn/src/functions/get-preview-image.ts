import getPreviewImage from '$lib/handlers/get-preview-image.js';
import { builder } from '@netlify/functions';

export const handler = builder(getPreviewImage);
