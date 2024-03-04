import type { FC, HTMLAttributes } from "react";
import React from "react";
import { clsx } from "clsx";
import { tv } from "tailwind-variants";
import { config } from "../../../backpack.config";
import { theStyles } from "@/components/Blockquote/blockquote.styles";

export type BlockquoteFooterProps = HTMLAttributes<unknown>;

const BlockquoteFooter: FC<BlockquoteFooterProps> = ({
  children,
  className,
}) => {
  const blockquoteStyles = tv(theStyles, {
    responsiveVariants: config.tvConfig?.responsiveVariants ?? false,
  });
  const { footer } = blockquoteStyles();
  const classes = clsx(footer(), className || "");

  return <footer className={classes}>{children}</footer>;
};

BlockquoteFooter.displayName = "BlockquoteFooter";
export { BlockquoteFooter };
