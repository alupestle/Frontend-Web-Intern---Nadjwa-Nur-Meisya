/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend:{
      colors:{
        'black': '#000000',
        'white': '#ffffff',
        'primary': '#1391AD',
        'accent': '#F4CD00',
        'second': '#083344',
      },
      fontFamily:{
        'poppins': ['poppins', 'sans'],
      },
    },
  },
  plugins: [],
}

