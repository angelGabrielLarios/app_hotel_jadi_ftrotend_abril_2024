
/** @type {import('tailwindcss').Config} */


import daisyui from "daisyui";
('tailwindcss-animated')
import tailwindcss_animated from "tailwindcss-animated";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "black-custom": "#333333",
        "white-custom": "#fcfcfc",

      },

      fontFamily: {
        'work': ["Work Sans", 'sans-serif'],
        'open': ["Open Sans", 'sans-serif'],
        'montserrat-sans': ["Montserrat", 'sans-serif'],
        'raleway': ["Raleway", 'sans-serif'],
      },

    },
  },
  daisyui: {

    themes: [
      {
        mytheme: {

          "primary": "#358eef",

          "secondary": "#faba0b",

          "accent": "#a9c7f8",

          "neutral": "#2a1716",

          "base-100": "#ffffff",
          "base-200": "#ffffff",
          "base-300": "#ffffff",
          "info": "#0098ee",




        },
      }
    ],
  },
  plugins: [
    daisyui,
    tailwindcss_animated
  ],
}


