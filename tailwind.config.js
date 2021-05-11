const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./src/**/*.vue"],
	theme: {
		extend: {
			colors: {
				...defaultTheme.colors,
				primary: "#21AFF2",
				secondary: "#fafafa",
			},
			container: {
				center: true,
				padding: {
					default: "0.5rem",
					sm: "1rem",
					lg: "8rem",
					xl: "12rem",
				},
			},
		},
		fontFamily: {
			sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
		},
	},
	variants: {},
	plugins: [require("@tailwindcss/typography")],
};
