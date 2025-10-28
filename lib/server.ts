const router = new Bun.FileSystemRouter({
	style: "nextjs",
	dir: "../routes",
	origin: "http://localhost:3000",
});
