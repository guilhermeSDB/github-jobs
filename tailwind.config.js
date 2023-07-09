/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        searchBgImg: "url('/backgroundImg.png')",
      },
      colors: {
        chambray: {
          50: "hsl(216, 63%, 97%)",
          100: "hsl(214, 62%, 93%)",
          200: "hsl(215, 66%, 87%)",
          300: "hsl(213, 64%, 78%)",
          400: "hsl(213, 63%, 68%)",
          500: "hsl(218, 61%, 60%)",
          600: "hsl(222, 55%, 53%)",
          700: "hsl(225, 51%, 48%)",
          800: "hsl(226, 47%, 40%)",
          900: "hsl(225, 43%, 35%)",
          950: "hsl(228, 38%, 21%)",
        },
      },
    },
  },
}
