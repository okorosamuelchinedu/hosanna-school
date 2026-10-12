// Vendor type declarations for packages without bundled types
/* eslint-disable @typescript-eslint/no-explicit-any */

declare module "class-variance-authority" {
  export function cva(base?: any, config?: any): (...args: any[]) => string;
  // VariantProps extracts the first parameter of a cva-produced function
  export type VariantProps<T extends (...args: any[]) => any> =
    Parameters<T>[0] extends Record<string, any>
      ? Parameters<T>[0]
      : Record<string, any>;
}
