/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto_400Regular", "Roboto_700Bold"],
        lato: ["Lato_400Regular", "Lato_700Bold"],
      },
    },
  },
  plugins: [],
}