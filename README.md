# only-bun

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```

This project was created using `bun init` in bun v1.3.0. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

# Authors note

Inspired by a discussion on the [DSU](https://discord.gg/BGJxKWZQtk) Discord server & a [video](https://youtu.be/dSIgEJSi0rY) by Theo.
We are only using Bun, hence the name only-bun.

## Current limitations I have run into

* Making your own template literal, you can get syntax highlighting but no auto complete you gotta opt. in to jsx or tsx for a nice templating feature but that's out of scope.
suggested fix would be a simple jsx/tsx parser build into bun that does not need React or similiar things installed.
* No build in markdown parser
