import type { DeepPartial } from "./helpers.tva.types";

export const themeConfig = <T>(object: T) => object;

export const deepMerge = <T>(target: T, source: any): T => {
  const output = { ...target };

  Object.keys(source).forEach((key) => {
    const sourceKey = key as keyof typeof source;
    const targetKey = key as keyof T;

    // @ts-ignore
    if (source[sourceKey] instanceof Object && targetKey in target) {
      output[targetKey] = deepMerge(
        target[targetKey] as any,
        source[sourceKey] as any,
      );
    } else {
      output[targetKey] =
        `${output[targetKey]} ${source[sourceKey]}` as T[keyof T];
    }
  });

  return output;
};
