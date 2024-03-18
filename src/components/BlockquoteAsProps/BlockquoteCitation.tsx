"use client"
import React, {FC, HTMLAttributes, useContext} from "react";
import {clsx} from "clsx";
import {BlockquoteContext} from "@/components/Blockquote/BlockquoteContext";

export interface BlockquoteCitationProps extends HTMLAttributes<unknown> {
  inverse?: boolean;
}

/**
 * This is BlockquoteCitation, Blockquote subcomponent
 */
const BlockquoteCitation: FC<BlockquoteCitationProps> = (props) => {
  const { children, className, inverse } = props;
  // @ts-ignore
  const {citation} = useContext(BlockquoteContext)

  // @ts-ignore
  const classes = clsx(className || "", citation?.className, citation?.inverse ? "inverse" : "");

  return <cite className={classes}>{children}</cite>;
};

BlockquoteCitation.displayName = "BlockquoteCitation";
export { BlockquoteCitation };
