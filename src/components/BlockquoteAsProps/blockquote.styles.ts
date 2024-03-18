import { themeConfig } from "@/helpers.tva";

export const blockquoteStyles = themeConfig({
  slots: {
    root: "md:m-24 m-0 ps-[--spacing-spacing-m] border-s-4 border-solid", // wrapper of the blockquote
    text: "font-light text-2xl italic md:text-3xl", // main text
    citation: "font-normal not-italic text-ui-label p-2", // citation styles
    footer: "mt-4", // footer that wraps citation
  },
  variants: {
    inverse: {
      true: {
        root: "bg-black text-white",
        text: "text-green-300",
        citation: "text-white bg-gray-700",
      },
      false: {
        root: "bg-white text-black",
        text: "text-green-700",
        citation: "text-black bg-gray-100",
      },
    },
    variant: {
      default: {
        root: "border-0 p-6",
      },
      primary: {
        root: "border-4 rounded-xl border-gray-950 p-12",
      },
      secondary: {
        root: "border-8 rounded-full border-gray-950 p-12",
      },
    },
  },
});
