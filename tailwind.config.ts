import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iranSans: ['var(--font-iranSans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default withMT(config);
