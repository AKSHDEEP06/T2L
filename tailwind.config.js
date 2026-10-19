/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		opacity: Object.fromEntries(Array.from({ length: 101 }, (_, i) => [i, `${i / 100}`])),
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			gold: {
  				DEFAULT: 'rgb(var(--gold) / <alpha-value>)',
  				deep: 'rgb(var(--gold-deep) / <alpha-value>)',
  				text: 'rgb(var(--gold-text) / <alpha-value>)',
  				soft: 'rgb(var(--gold) / 0.14)'
  			},
  			ink: 'rgb(var(--ink) / <alpha-value>)',
  			surface: 'rgb(var(--surface) / <alpha-value>)',
  			solid: 'rgb(var(--solid) / <alpha-value>)',
  			navy: {
  				DEFAULT: 'rgb(var(--navy) / <alpha-value>)',
  				2: 'rgb(var(--navy-2) / <alpha-value>)'
  			},
  			tgray: {
  				DEFAULT: 'rgb(var(--tgray) / <alpha-value>)',
  				2: 'rgb(var(--tgray-2) / <alpha-value>)'
  			},
  			line: {
  				DEFAULT: 'rgb(var(--line) / <alpha-value>)',
  				soft: 'rgb(var(--line-soft) / <alpha-value>)'
  			},
  			bgtint: 'rgb(var(--bgtint) / <alpha-value>)'
  		},
  		fontFamily: {
  			heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
  			body: ['var(--font-body)', 'system-ui', 'sans-serif'],
  			display: ['var(--font-display)', 'system-ui', 'sans-serif'],
  			mono: ['var(--font-mono)', 'monospace']
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'marquee': {
  				from: { transform: 'translateX(0)' },
  				to: { transform: 'translateX(-50%)' }
  			},
  			'spin-slow': {
  				to: { transform: 'rotate(360deg)' }
  			},
  			'float': {
  				'0%,100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-12px)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'marquee': 'marquee 38s linear infinite',
  			'spin-slow': 'spin-slow 14s linear infinite',
  			'float': 'float 7s ease-in-out infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
