/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'secondary': "#F9EF23",
				'dark-gray': "#141414",
			},
			fontFamily: {
				'anton': ['"Anton"', "sans-serif"],
				'grotesk': ['"Hanken Grotesk"', "sans-serif"],
			},
		}
	},
	plugins: [],
}	
