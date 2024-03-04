import type { HTMLAttributes } from "react";
import React, { forwardRef } from "react";
import { clsx } from "clsx";
import type { TV } from "tailwind-variants";
import { tv } from "tailwind-variants";

import { WithTVAProps } from "../../../tva.types";
import { config } from "../../../backpack.config";
import { theStyles } from "@/components/Blockquote/blockquote.styles";

// Use the Parameters utility type to extract arguments
type FunctionParameters = Parameters<TV>;
type FirstParameterType = FunctionParameters[0];

interface BlockquoteProps
  extends HTMLAttributes<HTMLQuoteElement>,
    WithTVAProps<Partial<typeof theStyles>> {
  /**
   * Applies an inverse theme to the component
   * @default false
   */
  inverse?: boolean;
}

const defaultProps: BlockquoteProps = {
  inverse: false,
};

/**
 * The `Blockquote` component is used to display a quote with its citation. It is composed of `BlockquoteText`, `BlockquoteFooter`, and `BlockquoteCitation` subcomponents.
 */
const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (props, forwardedRef) => {
    const { children, className = false, tvaProps, inverse, ...rest } = props;

    const blockquoteStyles = tv(theStyles, {
      responsiveVariants: config.tvConfig?.responsiveVariants ?? false,
    });
    const { root } = blockquoteStyles({ inverse });

    const classes = clsx("ef-blockquote", root(), className || "");

    return (
      <blockquote ref={forwardedRef} className={classes} {...rest}>
        {children}
      </blockquote>
    );
  },
);

Blockquote.displayName = "Blockquote";
export { Blockquote };
