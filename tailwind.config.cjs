/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat'],
				anton: ['Anton'],
			},
			colors: {
				'primary': '#14181b',
				'green_soft': '#65d28e',
			},
		},
	},
	plugins: [
		require('tailwindcss-debug-screens'),
	],
}
