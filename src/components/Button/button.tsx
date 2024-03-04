"use client";
import { FC, PropsWithChildren } from "react";
import * as logger from "@/utils/loggers";
import { theStyles } from "@/components/Button/button.styles";
import { tv } from "tailwind-variants";
import { config } from "../../../backpack.config";
import { DeepPartial, WithTVAProps } from "../../../tva.types";
import clsx from "clsx";
import { deepMerge } from "../../../helper.tva";
interface Props
  extends PropsWithChildren,
    WithTVAProps<DeepPartial<typeof theStyles>> {
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: FC<Props> = (props) => {
  const { variant = "primary", tvaProps, children, className } = props;
  logger.ButtonLogger.debug("Button rendered. Props:", props);
  if (tvaProps) {
    logger.ButtonLogger.box("deep merge: ", deepMerge(theStyles, tvaProps));
  }

  const buttonStyles = tv(
    tvaProps ? deepMerge(theStyles, tvaProps) : theStyles,
    {
      responsiveVariants: config.tvConfig?.responsiveVariants ?? false,
    },
  );

  const { root } = buttonStyles({ variant });
  const classes = clsx("ef-button", root(), className);

  return <button className={classes}>{children}</button>;
};

Button.displayName = "Button";
export { Button };
