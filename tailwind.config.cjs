/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				manrope: ['"Manrope", serif;'],
			},
			colors: {
				'dark_06': '#161616',
				'dark_10': '#191919',
				'dark_16': '#282828',
				'gray_40': '#666666',
				'gray_46': '#757575',
				'gray_46': '#999999',
				'gray_80': '#CCCCCC',
				'gray_85': '#D9D9D9',
				'gray_90': '#E6E6E6',
				'gray_95': '#F2F2F2',
				'gray_99': '#FCFCFC',
				'purple_78': '#A291FD'
			},
		},
		screens: {
			'tablet': '810px',
			'laptop': '1440px',
			'desktop': '1800px'
		}
	},
	plugins: [
		require('tailwindcss-debug-screens'),
	],
}
