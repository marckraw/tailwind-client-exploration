import { myTva } from "../../../helper.tva";

export const theStyles = myTva({
  slots: {
    root: "group/root is-published bg-blockquote-text-color p-2  pt-2",
    text: "text-2xl font-light italic text-blockquote-text-color group-hover/root:text-4xl md:text-3xl",
    citation:
      " text-ui-label font-normal not-italic text-blockquote-text-color group-hover/root:text-4xl",
    footer:
      "mt-6 group-hover/root:text-4xl group-[.is-published]/root:bg-amber-500",
  },
  variants: {
    inverse: {
      true: {
        root: "border-system-text-on-dark text-system-text-on-dark",
      },
    },
  },
} as const);
