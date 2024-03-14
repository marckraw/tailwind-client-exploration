"use client"
import type {FC, HTMLAttributes} from "react";
import React from "react";
import {clsx} from "clsx";
import {blockQuoteFooterAtom} from "@/components/Blockquote/Blockquote";
import {useAtomValue} from "jotai";
import {useSlots} from "slot-me-in";
import {decorateWithProps} from "@/utils/decorateWithProps";

export interface BlockquoteFooterProps extends HTMLAttributes<unknown> {
  inverse?: boolean;
  classNameCitation?: string;
}

type Slots = {
  BlockquoteCitation: any;
};

const BlockquoteFooter: FC<BlockquoteFooterProps> = (props) => {
  const { children, className, classNameCitation, inverse } = props;
  const { BlockquoteCitation } = useSlots<Slots>(children);

  const newProps = useAtomValue(blockQuoteFooterAtom)

  const classes = clsx(className || "", newProps?.className, newProps?.inverse ? "inverse" : "");

  const DecoratedBlockquoteCitation = decorateWithProps({
    Component: BlockquoteCitation,
    props: {
      inverse: (value: boolean) =>
        typeof value !== "undefined" ? value : inverse,
      className: (value: string) => clsx(classNameCitation, value),
    },
  });

  return <footer className={classes}>
    {BlockquoteCitation}
  </footer>;
};

BlockquoteFooter.displayName = "BlockquoteFooter";
export { BlockquoteFooter };
