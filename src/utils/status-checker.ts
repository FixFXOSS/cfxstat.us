import type {
	ServiceEndpoint,
	ServiceResult,
	ServiceStatus,
	CategoryResult,
	StatusSummary,
} from "@/types/status";
import type { ServiceCategory } from "@/types/status";

const TIMEOUT_MS = 8_000;

/**
 * Probe one endpoint and return a result.
 * Uses a simple fetch with a timeout via AbortController.
 */
async function checkEndpoint(svc: ServiceEndpoint): Promise<ServiceResult> {
	const start = performance.now();
	const ctrl = new AbortController();
	const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);

	try {
		const res = await fetch(svc.url, {
			method: svc.method ?? "GET",
			signal: ctrl.signal,
			redirect: "follow",
			headers: {
				"User-Agent": "status.fixfx.wiki/1.0 (status-checker)",
			},
		});

		clearTimeout(timer);
		const elapsed = Math.round(performance.now() - start);
		const expected = svc.expectedStatus ?? 200;
		const ok = svc.acceptRange
			? res.status >= 200 && res.status < 400
			: res.status === expected;

		return {
			id: svc.id,
			name: svc.name,
			status: ok ? "operational" : "degraded",
			responseTime: elapsed,
			statusCode: res.status,
			checkedAt: new Date().toISOString(),
		};
	} catch (err) {
		clearTimeout(timer);
		const elapsed = Math.round(performance.now() - start);
		const isTimeout = (err as Error).name === "AbortError";

		return {
			id: svc.id,
			name: svc.name,
			status: "major",
			responseTime: isTimeout ? TIMEOUT_MS : elapsed,
			statusCode: null,
			checkedAt: new Date().toISOString(),
			error: isTimeout ? "Request timed out" : (err as Error).message,
		};
	}
}

/** Derive worst status from a list of results. */
function worstStatus(results: ServiceResult[]): ServiceStatus {
	if (results.some((r) => r.status === "major")) return "major";
	if (results.some((r) => r.status === "degraded")) return "degraded";
	if (results.some((r) => r.status === "partial")) return "partial";
	if (results.some((r) => r.status === "unknown")) return "unknown";
	return "operational";
}

/**
 * Check all services across all categories and return a full summary.
 */
export async function checkAllServices(
	categories: ServiceCategory[],
): Promise<StatusSummary> {
	const categoryResults: CategoryResult[] = await Promise.all(
		categories.map(async (cat) => {
			const services = await Promise.all(
				cat.services.map((svc) => checkEndpoint(svc)),
			);
			return {
				id: cat.id,
				name: cat.name,
				icon: cat.icon,
				color: cat.color,
				overallStatus: worstStatus(services),
				services,
			};
		}),
	);

	const allResults = categoryResults.flatMap((c) => c.services);
	const operationalCount = allResults.filter(
		(r) => r.status === "operational",
	).length;

	return {
		overall: worstStatus(allResults),
		categories: categoryResults,
		lastChecked: new Date().toISOString(),
		totalServices: allResults.length,
		operationalCount,
	};
}
