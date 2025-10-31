import "@drop-in/graffiti";

export function Home() {
	// This is the route handler
	return new Response(
		String(
			<div>
				<h1>Hello World</h1>
			</div>,
		),
		{
			headers: { "Content-Type": "text/html" },
		},
	);
}
