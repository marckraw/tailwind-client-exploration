import type { HTMLAttributes } from "react";
import React, { forwardRef } from "react";
import { clsx } from "clsx";
import type { TV } from "tailwind-variants";
import { tv } from "tailwind-variants";

import { WithTVAProps } from "../../../tva.types";
import { config } from "../../../backpack.config";
import { theStyles } from "@/components/Blockquote/blockquote.styles";
import { useSlots } from "slot-me-in";
import { decorateWithProps } from "@/utils/decorateWithProps";

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

type Slots = {
  BlockquoteText: any;
  BlockquoteFooter: any;
};

/**
 * The `Blockquote` component is used to display a quote with its citation. It is composed of `BlockquoteText`, `BlockquoteFooter`, and `BlockquoteCitation` subcomponents.
 */
const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (props, forwardedRef) => {
    const { children, className = false, tvaProps, inverse, ...rest } = props;

    const { BlockquoteText, BlockquoteFooter } = useSlots<Slots>(children);

    console.log(BlockquoteText);
    console.log(BlockquoteFooter);

    const blockquoteStyles = tv(theStyles, {
      responsiveVariants: config.tvConfig?.responsiveVariants ?? false,
    });
    const { root, footer, text, citation } = blockquoteStyles({ inverse });

    const classes = clsx("ef-blockquote", root(), className || "");

    return (
      <blockquote ref={forwardedRef} className={classes} {...rest}>
        {decorateWithProps({
          Component: BlockquoteText,
          props: {
            inverse,
            className: text(), // this overwrites className completely
          },
        })}
        {decorateWithProps({
          Component: BlockquoteFooter,
          callback: (Component, props) => ({
            ...Component,
            props: {
              ...Component.props,
              ...props,
              inverse,
              // this custom callback doesnt not overwrite, but combine classes that user provided with our classes
              className: `${Component.props.className} ${footer()}`,
            },
          }),
        })}
      </blockquote>
    );
  },
);

Blockquote.displayName = "Blockquote";
export { Blockquote };
