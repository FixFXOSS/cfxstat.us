import { useState, useCallback, useEffect } from "react";
import type { StatusSummary } from "@/types/status";
import { OverallBanner } from "@/components/ui/OverallBanner";
import { ServiceCategoryCard } from "@/components/ui/ServiceCategoryCard";
import { StatusHeader } from "@/components/StatusHeader";
import { StatusFooter } from "@/components/StatusFooter";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { RefreshCw, Clock } from "lucide-react";
import { cn } from "@/utils/cn";

interface StatusPageLayoutProps {
	initialData: StatusSummary;
}

function timeSince(iso: string): string {
	const diff = Date.now() - new Date(iso).getTime();
	const secs = Math.floor(diff / 1000);
	if (secs < 5) return "just now";
	if (secs < 60) return `${secs}s ago`;
	const mins = Math.floor(secs / 60);
	if (mins < 60) return `${mins}m ago`;
	return `${Math.floor(mins / 60)}h ago`;
}

export default function StatusPageLayout({
	initialData,
}: StatusPageLayoutProps) {
	const [data, setData] = useState<StatusSummary>(initialData);
	const [refreshing, setRefreshing] = useState(false);
	const [lastRefreshLabel, setLastRefreshLabel] = useState("just now");

	// Keep the "Xm ago" label ticking
	useEffect(() => {
		const interval = setInterval(() => {
			setLastRefreshLabel(timeSince(data.lastChecked));
		}, 5_000);
		return () => clearInterval(interval);
	}, [data.lastChecked]);

	const refresh = useCallback(async () => {
		setRefreshing(true);
		try {
			const res = await fetch("/api/status");
			if (res.ok) {
				const json = (await res.json()) as StatusSummary;
				setData(json);
				setLastRefreshLabel("just now");
			}
		} finally {
			setRefreshing(false);
		}
	}, []);

	// Auto-refresh every 60s
	useEffect(() => {
		const interval = setInterval(refresh, 60_000);
		return () => clearInterval(interval);
	}, [refresh]);

	return (
		<div className="relative min-h-screen flex flex-col bg-[#0a0a0f]">
			<BackgroundEffects />

			<div className="relative z-10 flex flex-col min-h-screen">
				<StatusHeader />

				<main className="flex-1 mx-auto w-full max-w-4xl px-4 py-8 md:px-6 md:py-12 space-y-8">
					{/* Overall banner */}
					<OverallBanner
						status={data.overall}
						operationalCount={data.operationalCount}
						totalServices={data.totalServices}
					/>

					{/* Toolbar */}
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2 text-xs text-gray-500">
							<Clock size={14} />
							<span>Last checked {lastRefreshLabel}</span>
						</div>

						<button
							type="button"
							onClick={refresh}
							disabled={refreshing}
							className={cn(
								"flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all",
								"border-white/8 bg-white/3 text-gray-400 hover:text-white hover:border-white/15",
								refreshing && "opacity-50 cursor-not-allowed",
							)}
						>
							<RefreshCw
								size={14}
								className={refreshing ? "animate-spin" : ""}
							/>
							{refreshing ? "Checking…" : "Refresh"}
						</button>
					</div>

					{/* Service categories */}
					<div className="space-y-4">
						{data.categories.map((cat) => (
							<ServiceCategoryCard key={cat.id} category={cat} />
						))}
					</div>
				</main>

				<StatusFooter />
			</div>
		</div>
	);
}
