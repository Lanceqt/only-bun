/**
 * Ensures a module isn’t executed directly as the Bun entrypoint.
 *
 * This helper is intended for files that should only ever be imported, not run.
 * It compares the caller’s module path to `Bun.main` (the absolute path of the
 * entry script). If they match, the script is being executed directly and the
 * process terminates with a non-zero exit code.
 *
 * Important:
 * - Pass the caller’s `import.meta.path` into this function. Do not default the
 *   parameter to `import.meta.path` inside this file—default parameters are
 *   evaluated in the callee’s module (`utils.ts`), which would always compare
 *   against the wrong path.
 *
 * Behavior:
 * - Logs a fatal message to stderr.
 * - Exits the process with code 1 via `process.exit(1)`.
 *
 * Usage:
 *   import { assert_not_run_directly } from "./utils";
 *   assert_not_run_directly(import.meta.path);
 *
 * @param current_path - The caller’s absolute module path (typically `import.meta.path`).
 */
export function assert_not_run_directly(current_path: string): void {
	if (current_path === Bun.main) {
		console.error("Fatal: Execution of this script directly is not permitted.");
		process.exit(1);
	}
}
