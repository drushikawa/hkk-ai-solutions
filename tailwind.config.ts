import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        void: '#050816',
        ink: '#08111f',
        plasma: '#8b5cf6',
        cyanova: '#22d3ee',
        aurora: '#60a5fa',
      },
      boxShadow: {
        glow: '0 0 42px rgba(34, 211, 238, 0.22)',
        violet: '0 0 52px rgba(139, 92, 246, 0.28)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at 20% 20%, rgba(34,211,238,.16), transparent 32%), radial-gradient(circle at 80% 10%, rgba(139,92,246,.18), transparent 30%), radial-gradient(circle at 50% 80%, rgba(96,165,250,.12), transparent 36%)',
      },
    },
  },
  plugins: [],
};

export default config;
