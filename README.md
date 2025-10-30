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

Inspired by a discussion on the [DSU](https://discord.gg/BGJxKWZQtk) Discord server (a server for Danish software developers) and a [video](https://youtu.be/dSIgEJSi0rY) by Theo.
We only use Bun—hence the name only-bun.
* A bit of a cop-out, but I really wanna use Signals, and implementing it myself—with all the footguns—was not it for me right now. So we have one dependency so far: Alien-Signals.
If we are gonna use dependencies, they should be like Alien-Signals: low-level stuff with no dependencies, in their own package.

## Current limitations I've run into

* If you make your own template literal, you can get syntax highlighting but no autocomplete—you gotta opt in to JSX or TSX for a nice templating feature, but that's out of scope.
Suggested fix would be a simple JSX/TSX parser built into Bun that does not need React or similar things installed.
* No built-in Markdown parser
