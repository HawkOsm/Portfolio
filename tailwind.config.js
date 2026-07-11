/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                ink: '#0B0C0E',
                panel: '#131418',
                line: '#26282E',
                paper: '#E9E7E2',
                muted: '#8E9198',
                buff: '#D9CBA3',
                signal: '#E4572E',
            },
            fontFamily: {
                display: ['"Saira Condensed"', 'sans-serif'],
                sans: ['"Instrument Sans"', 'sans-serif'],
                mono: ['"Spline Sans Mono"', 'monospace'],
            },
            maxWidth: {
                site: '1120px',
            },
        },
    },
    plugins: [],
};
