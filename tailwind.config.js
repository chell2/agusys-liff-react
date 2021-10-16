module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "dark",
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		themes: ["cupcake"],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
	},
};
