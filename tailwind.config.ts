import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        xxs: "var(--spacing-spacing-xxs)",
        xs: "var(--spacing-spacing-xs)",
        s: "var(--spacing-spacing-s)",
        m: "var(--spacing-spacing-m)",
        l: "var(--spacing-spacing-l)",
        xl: "var(--spacing-spacing-xl)",
        xxl: "var(--spacing-spacing-xxl)",
        xxxl: "var(--spacing-spacing-xxxl)",
      },
      colors: {
        "blockquote-text-color": "var(--text-blockquote-text-color)",
        "blockquote-border-color": "var(--text-blockquote-border-color)",
        "system-text-on-dark": "var(--color-system-text-on-dark)",
      },
      fontSize: {
        "blockquote-cite-fontSize": "var(--text-blockquote-cite-fontSize)",
        "ui-label-fontSize": "var(--text-ui-label-fontSize)",
      },
      fontWeight: {
        "blockquote-cite-fontWeight": "var(--text-blockquote-cite-fontWeight)",
        "ui-label-fontWeight": "var(--text-ui-label-fontWeight)",
      },
      lineHeight: {
        "blockquote-cite-lineHeight": "var(--text-blockquote-cite-lineHeight)",
        "ui-label-lineHeight": "var(--text-ui-label-lineHeight)",
      },
    },
  },
  plugins: [],
};
export default config;
