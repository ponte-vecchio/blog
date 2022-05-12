module.exports = {
	mode: "jit",
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/styles/*.css",
	],
	content: [],
	theme: {
		extend: {},
		colors: {
			bg: "#0E242Dfa",
			fg: "#ffffff",
			fgalt: "#dceec8",
			black: "#173f4f",
			red: "#c86663",
			green: "#73ba25",
			darkgreen: "#81c13b",
			yellow: "#ffc107",
			blue: "#73add3",
			darkblue: "#21a4df",
			magenta: "#1aad95",
			darkmagenta: "#00a489",
			cyan: "#4eac89",
			darkcyan: "#6ab37c",
			white: "#ffffff",
			// bg: "#072f3f",
			// fg: "#eeeeeeee",
			// black: "#173f4f", // background
			// red: "#C86663",
			// green: "#6AB37C",
			// yellow: "#ffc107",
			// blue: "#21a4df",
			// magenta: "#00a489",
			// cyan: "#4ac0b4", // foreground
			// white: "#ffffff",
			zinc: "#072f3f", // source code background
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
