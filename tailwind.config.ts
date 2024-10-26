import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			light: {
  				background: '#FFFFFF',
  				text: '#1A1A1A',
  				primary: '#1D4ED8',
  				secondary: '#FBBF24',
  				card: '#F9FAFB',
  				accent: '#34D399',
  				muted: '#E5E7EB',
  				error: '#F44336',
  				success: '#4CAF50',
  				info: '#2196F3',
  				warning: '#FF9800',
  				border: '#E5E7EB',
  				shadow: 'rgba(0, 0, 0, 0.1)'
  			},
  			dark: {
  				background: '#1A1A1A',
  				text: '#F0F0F0',
  				primary: '#4F46E5',
  				secondary: '#FBBF24',
  				card: '#2A2A2A',
  				accent: '#10B981',
  				muted: '#4B5563',
  				error: '#F44336',
  				success: '#4CAF50',
  				info: '#2196F3',
  				warning: '#FF9800',
  				border: '#4B5563',
  				shadow: 'rgba(255, 255, 255, 0.1)'
  			}
  		},
  		spacing: {
  			'72': '18rem',
  			'84': '21rem',
  			'96': '24rem',
  			'128': '32rem',
  			'144': '36rem'
  		},
  		fontSize: {
  			xxs: '0.65rem',
  			tiny: '0.875rem',
  			base: '1rem',
  			lg: '1.125rem',
  			xl: '1.25rem',
  			'2xl': '1.5rem',
  			'3xl': '1.875rem',
  			'4xl': '2.25rem',
  			'5xl': '3rem',
  			'6xl': '3.75rem',
  			'7xl': '4.5rem'
  		},
  		fontFamily: {
  			sans: ['Inter', 'ui-sans-serif', 'system-ui'],
  			serif: ['Merriweather', 'ui-serif', 'Georgia'],
  			mono: ['Menlo', 'Monaco', 'ui-monospace', 'monospace']
  		},
  		borderRadius: {
  			none: '0',
  			sm: 'calc(var(--radius) - 4px)',
  			DEFAULT: '0.25rem',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			xl: '0.75rem',
  			'2xl': '1rem',
  			'3xl': '1.5rem',
  			full: '9999px'
  		},
  		boxShadow: {
  			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  			DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  			outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  			none: 'none'
  		}
  	}
  },
  darkMode: ['class'], // Enables class-based dark mode
  plugins: [require("tailwindcss-animate")], // Include plugins here if needed
};

export default config;
