/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1760B8',
          accent: '#2F80ED',
          navy: '#17365D',
          dark: '#17212F',
          light: '#EAF4FF',
          border: '#DCE5F0',
          muted: '#64748B',
          surface: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(23, 54, 93, 0.05), 0 1px 2px 0 rgba(23, 54, 93, 0.03)',
        'card': '0 4px 20px -2px rgba(23, 54, 93, 0.08)',
        'hover': '0 12px 28px -4px rgba(23, 96, 184, 0.15)',
        'modal': '0 20px 40px -8px rgba(23, 54, 93, 0.25)',
      },
    },
  },
  plugins: [],
};
