import { FC, ReactElement } from "react";

interface DecorateWithPropsOptions<V> {
  Component: V;
  props?: { [key: string]: any | ((originalValue: any) => any) };
}
export function decorateWithProps<V extends ReactElement>({
  Component,
  props,
}: DecorateWithPropsOptions<V>): V | undefined {
  if (!Component) {
    return undefined;
  }

  const newProps = Object.keys(props || {}).reduce(
    (acc: { [key: string]: any }, key) => {
      const originalValue = Component.props[key];
      const propValue = props![key]; // We've already checked that props is not undefined
      const newValue =
        typeof propValue === "function" ? propValue(originalValue) : propValue;
      acc[key] = newValue;
      return acc;
    },
    {},
  );
  return {
    ...Component,
    props: {
      ...Component.props,
      ...newProps,
    },
  };
}
