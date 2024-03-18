"use client"
import React, {FC, HTMLAttributes, useContext} from "react";
import {clsx} from "clsx";
import {BlockquoteContext} from "@/components/Blockquote/BlockquoteContext";

export interface BlockquoteFooterProps extends HTMLAttributes<unknown> {
  inverse?: boolean;
  classNameCitation?: string;
}

type Slots = {
  BlockquoteCitation: any;
};

const BlockquoteFooter: FC<BlockquoteFooterProps> = (props) => {
  const { children, className, classNameCitation, inverse } = props;
  // @ts-ignore
  const {footer} = useContext(BlockquoteContext)
  console.log('loaded footer')
  // @ts-ignore
  const classes = clsx(className || "", footer?.className, footer?.inverse ? "inverse" : "");

  return <footer className={classes}>
    {children}
  </footer>;
};

BlockquoteFooter.displayName = "BlockquoteFooter";
export { BlockquoteFooter };
