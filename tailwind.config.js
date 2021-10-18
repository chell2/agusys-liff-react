module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "dracula",
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		themes: ["cupcake", "dracula"],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
	},
};
