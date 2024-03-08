import { backpackTVA } from "@/helpers.tva";

export const blockquoteStyles = backpackTVA({
  slots: {
    root: "m-0 ps-[--spacing-spacing-m] border-s-4 border-solid",
    text: "font-light text-2xl italic md:text-3xl",
    citation: "font-normal not-italic text-ui-label",
    footer: "mt-6",
  },
  variants: {
    inverse: {
      true: {
        root: "bg-purple-950 text-amber-100",
        text: "text-amber-300",
        citation: "text-amber-500",
        footer: "p-8 text-7xl",
      },
      false: {
        root: "bg-purple-100 text-amber-900",
        text: "text-amber-700",
        citation: "text-amber-500",
        footer: "p-24",
      },
    },
    variant: {
      default: {
        root: "border-2 border-gray-950 p-12 text-white",
      },
      primary: {
        root: "border-4 rounded-xl border-gray-950 p-12 text-white",
      },
      secondary: {
        root: "border-8 rounded-3xl border-gray-950 p-12 text-white",
        footer: "border-8 rounded-3xl",
      },
    },
  },
});
