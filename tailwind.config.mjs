/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'red-800': '#c62828',
        'blue-800': '#1e88e5',
        'green-800': '#388e3c',
        'gray-800': '#424242',
        // Agrega otros colores aquí
      },
		},
	},
	plugins: [],
}
