"use client";
import type { FC, HTMLAttributes } from "react";
import React from "react";
import { clsx } from "clsx";
export interface BlockquoteTextProps extends HTMLAttributes<unknown> {
  inverse?: boolean;
}

const BlockquoteText: FC<BlockquoteTextProps> = (props) => {
  const { children, className, inverse, ...rest } = props;

  console.log("Inverse from BlockquoteText: ");
  console.log({ inverse });

  const classes = clsx(className || "");

  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
};

BlockquoteText.displayName = "BlockquoteText";
export { BlockquoteText };
