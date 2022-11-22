/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/containers/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                main: 'var(--main)',
                second: 'var(--second)',
                third: 'var(--third)',
                navbar: 'var(--navbar)',
                'top-navbar': 'var(--top-navbar)',
                'txt-main': 'var(--text-main)',
                'txt-third': 'var(--text-third)',
                'txt-navbar': 'var(--text-navbar)',
                'txt-highlight': 'var(--text-highlight)',
                'txt-link': 'var(--text-link)',
                'search-icon': 'var(--search-icon)',
            },
            height: {
                'top-navbar': 'var(--top-navbar-h)',
                navbar: 'var(--navbar-h)',
            },
            margin: {
                'top-navbar': 'var(--m-top-navbar)',
                navbar: 'var(--m-navbar)',
            },
            lineHeight: {
                'top-navbar': 'var(--top-navbar-h)',
                navbar: 'var(--navbar-h)',
            },
            minHeight: {
                navbar: 'var(--navbar-h)',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
    },
    plugins: [],
};
