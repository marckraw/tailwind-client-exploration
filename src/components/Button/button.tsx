"use client";
import { FC, PropsWithChildren } from "react";
import * as logger from "@/utils/loggers";
import { button } from "@/components/Button/button.styles";
import { twMerge } from "tailwind-merge";
interface Props extends PropsWithChildren {
  something: boolean;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: FC<Props> = (props) => {
  const { something, variant = "primary", children, className } = props;
  logger.ButtonLogger.debug("Button rendered. Props:", props);

  return (
    <button
      className={twMerge(
        button({ something, variant }),
        // "hover: bg-amber-500",
        className,
      )}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";
export { Button };
