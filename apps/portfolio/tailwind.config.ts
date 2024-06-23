// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/ui/tailwind.config';

const config: Pick<Config, 'content' | 'presets' | 'theme'> = {
  content: [
    './app/**/*.tsx',
    './components/**/*.tsx',
  ],
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#D7C0AE',
        navigation:'#967E76',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
      },
    },
  },
};

export default config;
