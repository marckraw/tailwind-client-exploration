"use client";
import { HTMLAttributes, ReactElement, useEffect } from "react";
import React, { forwardRef } from "react";
import { clsx } from "clsx";
import { tv } from "tailwind-variants";

import { DeepPartial } from "@/helpers.tva.types";
import { blockquoteStyles } from "@/components/Blockquote/blockquote.styles";
import { useSlots } from "slot-me-in";
import { BlockquoteCitation as BlockquoteCitationComponent } from "@/components/Blockquote/BlockquoteCitation";
import {
  ExtractSpecificStyles,
  WithStyleDefinition,
} from "@/helpers.tva.types";
import { deepMerge } from "@/helpers.tva";
import { BlockquoteText as BlockquoteTextComponent } from "./BlockquoteText";
import { BlockquoteFooter as BlockquoteFooterComponent } from "./BlockquoteFooter";
import { decorateWithProps } from "@/utils/decorateWithProps";

type BlockquoteRootStyles = ExtractSpecificStyles<
  typeof blockquoteStyles,
  ["root", "text", "footer", "citation"]
>;
interface BlockquoteProps
  extends HTMLAttributes<HTMLQuoteElement>,
    WithStyleDefinition<DeepPartial<BlockquoteRootStyles>> {
  /**
   * Applies an inverse theme to the component
   * @default false
   */
  inverse?: boolean;
  variant?: "default" | "primary" | "secondary";
}

type Slots = {
  BlockquoteText: ReactElement<typeof BlockquoteTextComponent>;
  BlockquoteCitation: ReactElement<typeof BlockquoteCitationComponent>;
  BlockquoteFooter: ReactElement<typeof BlockquoteFooterComponent>;
};

/**
 * The `Blockquote` component is used to display a quote with its citation. It is composed of `BlockquoteText`, `BlockquoteFooter`, and `BlockquoteCitation` subcomponents.
 */
const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (props, forwardedRef) => {
    const {
      children,
      className = "",
      styleDefinition,
      inverse,
      variant = "default",
      ...rest
    } = props;
    const { BlockquoteText, BlockquoteFooter } = useSlots<Slots>(children);

    const styles = tv(
      styleDefinition
        ? deepMerge(blockquoteStyles, styleDefinition)
        : blockquoteStyles,
      {
        responsiveVariants: false,
      },
    );
    const { text, root, footer, citation } = styles({ inverse, variant });
    const classes = clsx("ef-blockquote", root(), className || "");

    const DecoratedBlockquoteText = decorateWithProps({
      Component: BlockquoteText,
      props: {
        className: (initValue: string) => clsx(text(), initValue),
        inverse: (initValue: boolean) =>
          typeof initValue !== "undefined" ? initValue : inverse,
      },
    });
    const DecoratedBlockquoteFooter = decorateWithProps({
      Component: BlockquoteFooter,
      props: {
        className: (initValue: string) => clsx(footer(), initValue),
        classNameCitation: citation(),
        inverse: (initValue: boolean) =>
          typeof initValue !== "undefined" ? initValue : inverse,
      },
    });

    return (
      <blockquote ref={forwardedRef} className={classes} {...rest}>
        {DecoratedBlockquoteText}
        {DecoratedBlockquoteFooter}
      </blockquote>
    );
  },
);

Blockquote.displayName = "Blockquote";
export { Blockquote };
