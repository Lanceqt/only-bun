/** @jsx h */
/**
 * Tiny TSX/TS module to sanity check that Bun executes, timers work,
 * and that JSX is actually being transformed.
 *
 * Run: bun only-bun/routes/test.tsx
 */

// Provide very permissive JSX types so TSX compiles without React types.
declare global {
	namespace JSX {
		interface IntrinsicElements {
			[elemName: string]: any;
		}
	}
}

// Minimal JSX factory so <tag ...> becomes h("tag", props, ...children)
function h(
	tag: string,
	props: Record<string, unknown> | null,
	...children: any[]
) {
	return { tag, props: props ?? {}, children };
}

// Log when the module is loaded
const loadedAt = new Date().toISOString();
console.log(`[routes/test.tsx] Module loaded at ${loadedAt}`);

// A tiny exported function that also logs when called
export function ping(label: string = "default") {
	const msg = `[routes/test.tsx] ping(${label}) @ ${new Date().toLocaleTimeString()}`;
	console.log(msg);
	return msg;
}

// Call it once automatically for a visible second line
ping("auto");

// Prove JSX is transformed by creating a JSX node and logging it
console.log("[routes/test.tsx] Starting JSX transform check...");

const jsxCheck = (
	<section data-ok={true} data-tsx="yes">
		<h1>JSX compiled</h1>
		<p>Props and children should be visible in the logged object.</p>
	</section>
);

console.log("[routes/test.tsx] JSX check:", jsxCheck);

// If running in the browser, also log after DOM is ready
if (typeof window !== "undefined") {
	window.addEventListener("DOMContentLoaded", () => {
		console.log(
			"[routes/test.tsx] DOMContentLoaded fired (browser environment detected)",
		);
	});
}

// Quick async tick to confirm timers are functioning
setTimeout(() => {
	console.log("[routes/test.tsx] setTimeout tick confirmed");
}, 0);
