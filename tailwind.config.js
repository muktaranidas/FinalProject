/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: "#00ffff",
          neutral: "#ff00ff",
          "base-100": "#ffffff",
        }

      }
    ]
  },
  theme: {
    extend: {},
  },
   plugins: [require("daisyui")],
}

