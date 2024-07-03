import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '250': '250px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
      },
      height: {
        '156': '156px',
        '187': '187px',
        '218': '218px',
        '250': '250px',
      },
      colors: {
        primary: "#fff",
        primaryDark: "rgba(255,255,255, 0.7);",
        secondary: "#FF5600",
      },
      backgroundImage: {
        radialBlack:
          "linear-gradient(225.95deg, #ffffff 0%, #6d6d6d 0%, #11101d 91.61%)",
        blueRadial:
          "linear-gradient(90deg, #6de4e8 0%, rgba(0, 178, 218, 0.6) 95.83%)",
        blueLight:
          "linear-gradient(90deg, #6de4e8 0%, rgba(255, 255, 255, 0.86) 95.83% )",
        OrangeRadial:
          "linear-gradient(90deg, #FF5600 0%, rgba(255, 85, 0, 0.6) 95.83%)",
        Orange:
          "linear-gradient(90deg, #7623E2 0%, rgba(255, 255, 255, 0.86) 95.83%)",
        OrangeLight:
          "linear-gradient(90deg, #7623E2 0%, rgba(255, 255, 255, 0.86) 95.83%)",
          
      },
      boxShadow: {
        dark: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
        custom: '0 0 10px rgba(255, 255, 255, 0.4)',

      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Montserrat', 'serif'],
        'mono': ['Montserrat', 'monospace'],
        'light': ['Montserrat-Light', 'sans-serif'],
        'thin': ['Montserrat-Thin', 'sans-serif'],
        'extralight': ['Montserrat-ExtraLight', 'sans-serif'],
        'asap': ['Asap', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
