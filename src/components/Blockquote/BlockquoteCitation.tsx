import type { FC, HTMLAttributes } from "react";
import React from "react";
import { clsx } from "clsx";
import { tv } from "tailwind-variants";
import { theStyles } from "@/components/Blockquote/blockquote.styles";
import { config } from "../../../backpack.config";

export type BlockquoteCitationProps = HTMLAttributes<unknown>;

/**
 * This is BlockquoteCitation, Blockquote subcomponent
 */
const BlockquoteCitation: FC<BlockquoteCitationProps> = ({
  children,
  className,
}) => {
  const blockquoteStyles = tv(theStyles, {
    responsiveVariants: config.tvConfig?.responsiveVariants ?? false,
  });
  const { citation } = blockquoteStyles();
  const classes = clsx(citation(), className || "");

  return <cite className={classes}>{children}</cite>;
};

BlockquoteCitation.displayName = "BlockquoteCitation";
export { BlockquoteCitation };
