/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#2529d8',
					secondary: '#2E303E',
					accent: '#1FB2A6',
					neutral: '#191D24',
					'base-100': '#030616',
					info: '#3ABFF8',
					success: '#02D290',
					warning: '#FBBD23',
					error: '#FF005E'
				}
			}
		]
	}
};
