/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'brand-dark': '#050505', // Keeping it pure black or close to it
                'brand-primary': '#00F3FF', // Cyan Neon
                'brand-secondary': '#7000FF', // Purple Neon
                'brand-accent': '#FF0055', // Red/Pink Accent
                'glass-white': 'rgba(255, 255, 255, 0.03)',
                'glass-border': 'rgba(255, 255, 255, 0.05)',

                // Handling Legacy Names
                'neon-blue': '#00F3FF',
                'neon-purple': '#BC13FE',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
                arabic: ['Cairo', 'Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': "url('/grid.svg')",
                'cyber-grid': 'linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
