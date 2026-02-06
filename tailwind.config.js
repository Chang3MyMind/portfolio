/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cores semânticas para fundo e texto
        background: {
          DEFAULT: "#F7F9FC", // Fundo no modo claro
          dark: "#242424", // Fundo no modo escuro
        },
        "text-color": {
          DEFAULT: "#0F172A", // Texto no modo claro
          dark: "#FFFFFF", // Texto no modo escuro
        },
        // Cores para botões e gradientes
        primary: {
          DEFAULT: "#3B82F6", // Cor principal
          dark: "#60A5FA", // Cor principal no modo escuro
        },
        secondary: {
          DEFAULT: "#60A5FA", // Cor secundaria
          dark: "#3B82F6", // Cor secundaria no modo escuro
        },
        // Cores para caixas
        "princ-box": {
          DEFAULT: "#DBEAFE", // Cor principal da caixa no modo claro
          dark: "#242424", // Cor principal da caixa no modo escuro
        },
        "second-box": {
          DEFAULT: "#D1D5DB", // Cor secundária da caixa no modo claro
          dark: "#1A1A1A", // Cor secundária da caixa no modo escuro
        },
      },
    },
  },
  plugins: [],
};
