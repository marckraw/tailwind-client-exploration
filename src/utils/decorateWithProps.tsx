import { FC, FunctionComponent } from "react";

export function decorateWithProps({
  Component,
  props,
  callback,
}: {
  Component: any;
  props?: any;
  callback?: (Component: any, props: any) => any;
}) {
  if (!Component) {
    return undefined;
  }

  if (callback) {
    // callback with props, so can create own overwrite ?
    return callback(Component, props); // should return
  } else {
    return {
      ...Component,
      props: {
        ...Component.props,
        ...props,
      },
    };
  }
}
