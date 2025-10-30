import { assert_not_run_directly } from "./utils";

assert_not_run_directly(import.meta.path);

const router = new Bun.FileSystemRouter({
	style: "nextjs",
	dir: `${import.meta.dir}/../routes`,
	origin: "http://localhost:3000",
	//assetPrefix: "/_only-bun/static",
});

try {
	const server = Bun.serve({
		port: 3000,
		routes: {
			"/": new Response(),
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
} catch {
	console.log("server failed to start:", Error);
}
