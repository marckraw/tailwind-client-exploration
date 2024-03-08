import type { FC, HTMLAttributes } from "react";
import React from "react";
import { clsx } from "clsx";
import { useSlots } from "slot-me-in";

export type BlockquoteFooterProps = HTMLAttributes<unknown>;

type Slots = {
  BlockquoteCitation: any;
};

const BlockquoteFooter: FC<BlockquoteFooterProps> = ({
  children,
  className,
}) => {
  const { BlockquoteCitation } = useSlots<Slots>(children);
  const classes = clsx(className || "");

  return <footer className={classes}>{BlockquoteCitation}</footer>;
};

BlockquoteFooter.displayName = "BlockquoteFooter";
export { BlockquoteFooter };
