"use client";
import type { FC, HTMLAttributes } from "react";
import React from "react";
import { clsx } from "clsx";

export interface BlockquoteCitationProps extends HTMLAttributes<unknown> {
  inverse?: boolean;
}

/**
 * This is BlockquoteCitation, Blockquote subcomponent
 */
const BlockquoteCitation: FC<BlockquoteCitationProps> = (props) => {
  const { children, className, inverse } = props;
  const classes = clsx(className || "");

  console.log("Inverse from BlockquoteCitation: ");
  console.log({ inverse });

  return <cite className={classes}>{children}</cite>;
};

BlockquoteCitation.displayName = "BlockquoteCitation";
export { BlockquoteCitation };
