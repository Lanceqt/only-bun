# only-bun

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```

This project was created using `bun init` in Bun v1.3.0. [Bun](https://bun.com) is a fast, all-in-one JavaScript runtime.

## Author's note

Inspired by a discussion on the [DSU](https://discord.gg/BGJxKWZQtk) Discord server (a server for Danish software developers) and a [video](https://youtu.be/dSIgEJSi0rY) by Theo. We only use Bun—hence the name only-bun.

Principles
- Bun-first: prefer Bun’s built-ins and APIs before reaching for external tools.
- Minimal dependencies: add only small, focused, dependency-free primitives.

Why KitaJS for JSX
- Type-safe ergonomics: @kitajs/html with @kitajs/ts-html-plugin provides TypeScript-aware JSX with autocomplete and useful errors that template literals can’t.
- Minimal runtime: compiles JSX to plain functions/strings—no React, no VDOM, no client framework.
- Performant: most work happens at compile time; the output is lean.
- Bun-friendly: integrates cleanly with Bun’s toolchain—no extra bundlers or servers.

Why Alien‑Signals
- Focused reactivity: fine-grained signals without a framework, ideal for sprinkling reactivity where it’s actually needed.
- Minimal and dependency-free: tiny surface area with zero transitive deps—easy to audit and reason about.
- Server/edge ready: works in simple Bun contexts without assuming a browser-first runtime.
- Philosophical fit: aligns with the Bun-first, minimal, and performant goals of this project.

Conventions
- Naming: Prefer snake_case over camelCase for readability and accessibility.

## Current limitations I've run into

* Bun doesn’t include a built-in JSX/TSX solution. We use @kitajs/html with @kitajs/ts-html-plugin to get typed JSX that compiles to plain functions at build time (no React required).
* No built-in Markdown parser.
* Reactivity isn’t built in; we use Alien‑Signals for a tiny, framework-free signals primitive.
