/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#050B19',
        cyber: '#2563EB',
        cyan: '#22D3EE',
        slate: '#1E293B',
        white: '#F9FAFB',
        grey: '#9CA3AF',
        success: '#22C55E',
        warning: '#FACC15',
        alert: '#F97373',
        purple: '#9333EA',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
