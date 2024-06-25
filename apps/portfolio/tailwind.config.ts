// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/ui/tailwind.config';
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Pick<Config, 'content' | 'presets' | 'theme' | 'plugins'> = {
  content: [
    './app/**/*.tsx',
    './components/**/*.tsx',
  ],
  presets: [sharedConfig],
  plugins: [addVariablesForColors],
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

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
