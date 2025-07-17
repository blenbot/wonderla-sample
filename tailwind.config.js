/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: "#22304a",
                secondary: "#276749",
                buttonbg: "#788beb",
                text: "#334dcf",
                button: "#fad600",
            },
            fontFamily: {
                mulish: ['Mulish', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
