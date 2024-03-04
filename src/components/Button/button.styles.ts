import { myTva } from "../../../helper.tva";

export const theStyles = myTva({
  slots: {
    root: "border-full m-4 border border-solid p-6 font-mono",
  },
  variants: {
    variant: {
      primary: {
        root: "bg-black hover:bg-gray-700",
      },
      secondary: {
        root: "border-0 bg-gray-800 text-white hover:bg-gray-700 hover:text-white",
      },
    },
  },
});
