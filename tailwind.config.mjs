export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        backgroundSize: {
            'auto': 'auto',
            'cover': 'cover',
            'contain': 'contain',
            '50%': '150%',
            '16': '4rem',
        },
        extend: {
            colors: {
                'custom-green': '#5c6244',
                'custom-brown': '#817065'
            }
        }
    },
    plugins: [],
};