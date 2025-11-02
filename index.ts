import index from "./routes/kita-test/index.html";

try {
	const server = Bun.serve({
		port: 3000,
		routes: {
			"/": index,
		},
		development: {
			hmr: true,
			console: true,
		},
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
