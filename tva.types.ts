// Use the Parameters utility type to extract arguments
import { TV } from "tailwind-variants";

export type FunctionParameters = Parameters<TV>;
export type FirstParameterType = FunctionParameters[0];

export interface WithTVAProps<T> {
  /**
   * TVA Props
   * @default undefined
   */
  tvaProps?: T extends FirstParameterType ? T : FirstParameterType;
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
