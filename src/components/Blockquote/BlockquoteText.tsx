"use client"
import React, {FC, HTMLAttributes, useContext} from "react";
import {clsx} from "clsx";
import {BlockquoteContext} from "@/components/Blockquote/BlockquoteContext";

export interface BlockquoteTextProps extends HTMLAttributes<unknown> {
  inverse?: boolean;
}

const BlockquoteText: FC<BlockquoteTextProps> = (props) => {
  const { children, className, inverse, ...rest } = props;
  // @ts-ignore
  const {text} = useContext(BlockquoteContext)

  // @ts-ignore
  const classes = clsx(className || "", text?.className, text?.inverse ? "inverse" : "");
  console.log('loaded text');
  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
};

BlockquoteText.displayName = "BlockquoteText";
export { BlockquoteText };
