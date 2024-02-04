import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva("rounded-md border-2 px-2 py-2", {
  variants: {
    something: {
      true: "text-red-900",
    },
    variant: {
      primary:
        "bg-cyan-900 text-cyan-200 hover:bg-cyan-500 hover:text-amber-200",
      secondary:
        "bg-amber-900 text-amber-200 hover:bg-amber-500 hover:text-cyan-200",
    },
  },
  defaultVariants: {
    something: false,
    variant: "primary",
  },
});

/**
 * Inferred types from buttonVariants cva function ??
 * */
export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export interface ButtonProps extends ButtonVariantProps {}

export const button = (props: ButtonProps) => buttonVariants(props);
