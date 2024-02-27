import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'clr-60': '#ff9cf3',
                'clr-30': '#ffff',
                'clr-10': '#7a006c',
                'counter-clr-60': '#343434',
                'counter-clr-30': '#343434',
                'counter-clr-10': '#ffff'
            }
        },
    },

    plugins: [forms],
};
