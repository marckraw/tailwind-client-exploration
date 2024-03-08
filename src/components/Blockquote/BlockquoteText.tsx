import type { FC, HTMLAttributes } from "react";
import React from "react";
import { clsx } from "clsx";

export type BlockquoteTextProps = HTMLAttributes<unknown>;

const BlockquoteText: FC<BlockquoteTextProps> = ({ children, className }) => {
  const classes = clsx(className || "");

  return <p className={classes}>{children}</p>;
};

BlockquoteText.displayName = "BlockquoteText";
export { BlockquoteText };
