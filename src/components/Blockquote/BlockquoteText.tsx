"use client"
import type {FC, HTMLAttributes} from "react";
import React from "react";
import {clsx} from "clsx";
import {useAtomValue} from "jotai/react";
import {blockQuoteTextAtom} from "@/components/Blockquote/Blockquote";

export interface BlockquoteTextProps extends HTMLAttributes<unknown> {
  inverse?: boolean;
}

const BlockquoteText: FC<BlockquoteTextProps> = (props) => {
  const { children, className, inverse, ...rest } = props;

  const newProps = useAtomValue(blockQuoteTextAtom);

  const classes = clsx(className || "", newProps?.className, newProps?.inverse ? "inverse" : "");
  console.log('loaded text')
  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
};

BlockquoteText.displayName = "BlockquoteText";
export { BlockquoteText };
