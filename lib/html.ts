/**
 * Custom HTML template literal helper function.
 *
 * Purpose: Enables HTML syntax highlighting when writing HTML in template literals.
 * This makes it easier to write and read HTML code within your TypeScript files.
 *
 * @example
 * const user = { name: "John" };
 * const page = html`<h1>Hello ${user.name}</h1>`;
 */
export function html(strings: TemplateStringsArray, ...values: any[]) {
  return String.raw(strings, ...values);
}
