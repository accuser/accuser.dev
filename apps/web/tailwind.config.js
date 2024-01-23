import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	css: {},
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				mono: ['Noto Sans Mono', ...defaultTheme.fontFamily.mono],
				sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
				serif: ['Noto Serif', ...defaultTheme.fontFamily.serif]
			}
		}
	},
	plugins: [typography]
};
