import type { FC, HTMLAttributes } from "react";
import React from "react";
import { clsx } from "clsx";

export type BlockquoteCitationProps = HTMLAttributes<unknown>;

/**
 * This is BlockquoteCitation, Blockquote subcomponent
 */
const BlockquoteCitation: FC<BlockquoteCitationProps> = ({
  children,
  className,
}) => {
  const classes = clsx(className || "");

  return <cite className={classes}>{children}</cite>;
};

BlockquoteCitation.displayName = "BlockquoteCitation";
export { BlockquoteCitation };
