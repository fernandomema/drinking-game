import animations from '@midudev/tailwind-animations'
import { fade } from 'svelte/transition';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      keyframes: {
        circleInHesitate: {
          '0%': { clipPath: 'circle(0%)' },
          '40%': { clipPath: 'circle(40%)' },
          '100%': { clipPath: 'circle(125%)' },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'circle-in-hesitate': '2.5s cubic-bezier(.25, 1, .30, 1) circleInHesitate both',
        'fade-out': '2.5s cubic-bezier(.25, 1, .30, 1) fadeOut both',
        'fade-in': '2.5s cubic-bezier(.25, 1, .30, 1) fadeIn both',
      },
    }
  },

  plugins: [animations, require("tailwindcss-safe-area")]
};