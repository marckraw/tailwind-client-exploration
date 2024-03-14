"use client"
import React, {forwardRef, HTMLAttributes, ReactElement} from "react";
import {clsx} from "clsx";
import {tv} from "tailwind-variants";

import {DeepPartial, ExtractSpecificStyles, WithThemeConfig} from "@/helpers.tva.types";
import {blockquoteStyles} from "@/components/Blockquote/blockquote.styles";
import {useSlots} from "slot-me-in";
import {BlockquoteCitation as BlockquoteCitationComponent} from "@/components/Blockquote/BlockquoteCitation";
import {deepMerge} from "@/helpers.tva";
import {BlockquoteText as BlockquoteTextComponent} from "./BlockquoteText";
import {BlockquoteFooter as BlockquoteFooterComponent} from "./BlockquoteFooter";
import {AtomsHydrator} from "@/components/AtomsHydrator";
import {atom} from "jotai";

type BlockquoteRootStyles = ExtractSpecificStyles<
  typeof blockquoteStyles,
  ["root", "text", "footer", "citation"]
>;

type Slots = {
  BlockquoteText: ReactElement<typeof BlockquoteTextComponent>;
  BlockquoteCitation: ReactElement<typeof BlockquoteCitationComponent>;
  BlockquoteFooter: ReactElement<typeof BlockquoteFooterComponent>;
};
interface BlockquoteProps
  extends HTMLAttributes<HTMLQuoteElement>,
    WithThemeConfig<DeepPartial<BlockquoteRootStyles>> {
  /**
   * Applies an inverse theme to the component
   * @default false
   */
  inverse?: boolean;
  variant?: "default" | "primary" | "secondary";
}

export const blockQuoteTextAtom = atom<{className?: string, inverse?: boolean}>({className: undefined, inverse: undefined});
export const blockQuoteFooterAtom = atom<{className?: string, inverse?: boolean}>({className: undefined, inverse: undefined});
export const blockQuoteCitationAtom = atom<{className?: string, inverse?: boolean}>({className: undefined, inverse: undefined});

/**
 * The `Blockquote` component is used to display a quote with its citation. It is composed of `BlockquoteText`, `BlockquoteFooter`, and `BlockquoteCitation` subcomponents.
 */
const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (props, forwardedRef) => {
    const {
      children,
      className = "",
      themeConfig,
      inverse,
      variant = "default",
      ...rest
    } = props;
    const { BlockquoteText, BlockquoteFooter } = useSlots<Slots>(children);

    const styles = tv(
      themeConfig ? deepMerge(blockquoteStyles, themeConfig) : blockquoteStyles,
      {
        responsiveVariants: false,
      },
    );
    const { text, root, footer, citation } = styles({ inverse, variant });
    const classes = clsx("ef-blockquote", root(), className || "");

    return (
      <blockquote ref={forwardedRef} className={classes} {...rest}>
        {/* @ts-ignore */}
        <AtomsHydrator atomValues={[
          [blockQuoteTextAtom, {className: text(), inverse}],
          [blockQuoteFooterAtom, {className: footer(), inverse}],
          [blockQuoteCitationAtom, {className: citation(), inverse}]
        ]}>
          {children}
        </AtomsHydrator>
      </blockquote>
    );
  },
);

Blockquote.displayName = "Blockquote";
export { Blockquote };
