import type { ServiceStatus } from "@/types/status";
import { cn } from "@/utils/cn";
import { statusConfig } from "./StatusBadge";

interface OverallBannerProps {
	status: ServiceStatus;
	operationalCount: number;
	totalServices: number;
}

const bannerMessages: Record<ServiceStatus, string> = {
	operational: "All Systems Operational",
	degraded: "Some Services Degraded",
	partial: "Partial System Outage",
	major: "Major System Outage",
	unknown: "Unable to Determine Status",
};

export function OverallBanner({
	status,
	operationalCount,
	totalServices,
}: OverallBannerProps) {
	const cfg = statusConfig[status];

	return (
		<div
			className={cn(
				"relative overflow-hidden rounded-2xl border p-6 md:p-8",
				cfg.bg,
			)}
		>
			{/* Glow effect */}
			<div
				className={cn(
					"absolute -top-1/2 -right-1/4 h-64 w-64 rounded-full blur-[100px] opacity-20",
					cfg.dot,
				)}
			/>

			<div className="relative z-10 flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
				{/* Pulsing indicator */}
				<div className="relative flex h-14 w-14 items-center justify-center">
					<span
						className={cn(
							"absolute inline-flex h-full w-full animate-ping rounded-full opacity-20",
							cfg.dot,
						)}
					/>
					<span
						className={cn(
							"relative inline-flex h-8 w-8 rounded-full",
							cfg.dot,
						)}
					/>
				</div>

				<div className="flex-1">
					<h2 className={cn("text-2xl md:text-3xl font-bold", cfg.color)}>
						{bannerMessages[status]}
					</h2>
					<p className="mt-1 text-sm text-gray-400">
						{operationalCount} of {totalServices} services are operational
					</p>
				</div>
			</div>
		</div>
	);
}
