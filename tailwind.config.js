/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
            'text': '#080807',
            'background': '#e9ebe6',
            'primary': '#545b49',
            'secondary': '#d1d6c7',
            'accent' : '#373b30'
        },

        spacing: {
            '17' : '68px',
            '19' : '76px',
            '20' : '80px',
            '21' : '84px',
            '22' : '88px',
            '23' : '92px',
            '25' : '100px',
            '26' : '104px',
            '34' : '136px',
            '68' : '272px',
            '100' : '400px',
            '104' : '416px',
            '106' : '424px',
            '108' : '432px',
        },

        fontFamily: {
            'quicksand': ['Nunito', 'sans-serif']
        },
    },
  },
  plugins: [],
}
