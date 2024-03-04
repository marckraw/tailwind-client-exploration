import type { FC, HTMLAttributes } from "react";
import React from "react";
import { clsx } from "clsx";
import { tv } from "tailwind-variants";
import { config } from "../../../backpack.config";
import { theStyles } from "@/components/Blockquote/blockquote.styles";

export type BlockquoteTextProps = HTMLAttributes<unknown>;

const BlockquoteText: FC<BlockquoteTextProps> = ({ children, className }) => {
  const blockquoteStyles = tv(theStyles, {
    responsiveVariants: config.tvConfig?.responsiveVariants ?? false,
  });
  const { text } = blockquoteStyles();
  const classes = clsx(text(), className || "");

  return <p className={classes}>{children}</p>;
};

BlockquoteText.displayName = "BlockquoteText";
export { BlockquoteText };
