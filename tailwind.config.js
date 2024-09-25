/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#1E0235',
                backgroundSecond: '#290B40',
                backgroundThird: '#290B40',
                text: '#CAB355',
                subText: '#79668B',
                button: '#F4D42A',
                icon: '#333366',
            },
            maxWidth: {
                page: '850px',
            },
        },
    },
    plugins: [require('tailwindcss-animated')],
}
