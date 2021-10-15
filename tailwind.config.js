module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false,
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		themes: ["cupcake", "emerald"],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
	},
};
