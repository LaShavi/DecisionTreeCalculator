/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'toast-slide-in': 'toast-slide-in 0.3s ease-out forwards',
        'toast-slide-out': 'toast-slide-out 0.3s ease-in forwards',
        'modal-fade-in': 'modal-fade-in 0.3s ease-out forwards',
        'modal-scale-in': 'modal-scale-in 0.3s ease-out forwards',
      },
      keyframes: {
        'toast-slide-in': {
          from: { transform: 'translateX(100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        'toast-slide-out': {
          from: { transform: 'translateX(0)', opacity: '1' },
          to: { transform: 'translateX(100%)', opacity: '0' },
        },
        'modal-fade-in': {
          from: { opacity: '0', 'backdrop-filter': 'blur(0px)' },
          to: { opacity: '1', 'backdrop-filter': 'blur(8px)' },
        },
        'modal-scale-in': {
          from: { transform: 'scale(0.95)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}