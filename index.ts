// Entry point & server.

import { render_user_page } from "./routes/another-test.ts";
import testing from "./routes/testing.html";
import layout from "./routes/layout.html";

try {
  const server = Bun.serve({
    port: 3000,
    routes: {
      "/": testing,
      "/layout": layout,
      "/another": () => {
        return new Response(render_user_page({ name: "foo", email: "foo" }), {
          headers: {
            "Content-Type": "text/html",
          },
        });
      },
      "/test/:id": (req) => {
        return new Response(`Hello ${req.params.id}!`);
      },
    },
    development: true,
  });

  const green_color = Bun.color("#0ADD08", "ansi");
  const cyan_color = Bun.color("#00FFFF", "ansi");
  const bold = "\x1b[1m";
  const reset = "\x1b[0m";
  const underline = "\x1b[4m";
  console.log(
    `server ${green_color + bold}running${reset} on: ${reset + cyan_color + underline + server.url}`,
  );
  console.log();
} catch {
  console.log("server failed to start:", Error);
}
