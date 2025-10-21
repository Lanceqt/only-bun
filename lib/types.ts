/**
 * Valid values for HTML template interpolation.
 *
 * Instead of 'any' to ensure type safety and better developer experience.
 * Includes primitives, null/undefined, and objects with toString() methods.
 */
export type HTML_Value =
  | string
  | number
  | boolean
  | null
  | undefined
  | {
      toString(): string;
    };
