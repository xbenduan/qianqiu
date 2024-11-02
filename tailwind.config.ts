import daisyui from 'daisyui';
import { Config } from 'tailwindcss/types/config';

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['cupcake'],
  },
} as Config;
