import React, {forwardRef, HTMLAttributes} from "react";
import {clsx} from "clsx";
import {tv} from "tailwind-variants";
import {DeepPartial, ExtractSpecificStyles, WithThemeConfig} from "@/helpers.tva.types";
import {blockquoteStyles} from "@/components/Blockquote/blockquote.styles";
import {deepMerge} from "@/helpers.tva";
import BlockquoteContextProvider from "@/components/Blockquote/BlockquoteContext";

type BlockquoteRootStyles = ExtractSpecificStyles<
  typeof blockquoteStyles,
  ["root", "text", "footer", "citation"]
>;

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
    const styles = tv(
      themeConfig ? deepMerge(blockquoteStyles, themeConfig) : blockquoteStyles,
      {
        responsiveVariants: false,
      },
    );
    const [toggle, setToggle] = React.useState(false);

    const {text, root, footer, citation} = styles({inverse, variant});
    const classes = clsx("ef-blockquote", root(), className || "", toggle ? "text-red-500" : "");

    return (
      <BlockquoteContextProvider value={{
        text: {className: text(), inverse},
        footer: {className: footer(), inverse},
        citation: {className: citation(), inverse}
      }}>
        <blockquote ref={forwardedRef} className={classes} {...rest} onClick={() => setToggle(!toggle)}>
          {children}
        </blockquote>
      </BlockquoteContextProvider>
  )
    ;
  },
);

Blockquote.displayName = "Blockquote";
export {Blockquote};
